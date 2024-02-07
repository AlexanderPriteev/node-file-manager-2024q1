import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { txtFailed } from '../modules/textArgs.mjs';

class ListItem {
  constructor(Name, Type) {
    this.Name = Name;
    this.Type = Type;
  }
}

export default async function ls(path) {
  try {
    const items = await readdir(path);
    const [files, dirs] = [[], []];
    await Promise.all(items.map(async (item) => {
      const itemPath = join(path, item);
      const stats = await stat(itemPath);
      if (stats.isFile()) files.push(item);
      if (stats.isDirectory())dirs.push(item);
    }));
    files.sort();
    dirs.sort();
    const result = dirs.map((e) => new ListItem(e, 'directory'))
      .concat(files.map((e) => new ListItem(e, 'file')));
    console.table(result);
  } catch {
    console.log(txtFailed);
  }
}
