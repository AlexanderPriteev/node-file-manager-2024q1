import { dirname, join } from 'node:path';
import { rename } from 'node:fs/promises';
import { txtFailed } from '../modules/textArgs.mjs';
import cd from './cd.mjs';

export default async function rn(dir, pathToFile, name) {
  try {
    const path = await cd(dir, pathToFile, 'file');
    if (path === txtFailed) throw new Error();
    const newName = join(dirname(path), name);
    await rename(path, newName);
  } catch {
    console.log(txtFailed);
  }
}
