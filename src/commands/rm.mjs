import { unlink } from 'node:fs/promises';
import cd from './cd.mjs';
import { txtFailed } from '../modules/textArgs.mjs';

export default async function rm(dir, name) {
  try {
    const path = await cd(dir, name);
    if (path === txtFailed) throw new Error();
    await unlink(path);
  } catch {
    console.log(txtFailed);
  }
}
