import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { txtFailed } from '../modules/textArgs.mjs';
import rm from './rm.mjs';
import getNewPath from '../modules/path/getNewPath.mjs';

export default async function copyFiles(isDel, dir, oldPath, newDir) {
  try {
    const [file, newFile] = await getNewPath(dir, oldPath, newDir);
    if ([file, newFile].includes(txtFailed)) throw new Error();

    const streamRead = createReadStream(file);
    const streamWrite = createWriteStream(newFile);
    await pipeline(streamRead, streamWrite);
    if (isDel) await rm(dir, file);
  } catch {
    console.log(txtFailed);
  }
}
