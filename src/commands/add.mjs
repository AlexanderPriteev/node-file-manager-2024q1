import { join } from 'node:path';
import { open } from 'node:fs/promises';
import { txtFailed } from '../modules/textArgs.mjs';

export default async function add(dir, name) {
  try {
    const path = join(dir, name);
    await open(path, 'wx');
  } catch {
    console.log(txtFailed);
  }
}
