import { basename, join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import cd from './cd.mjs';
import { txtFailed } from '../modules/textArgs.mjs';
import rm from "./rm.mjs";

export default async function copyFiles(isDel, dir, oldPath, newPath) {
  try {
    const file = await cd(dir, oldPath, 'file');
    let newFile = await cd(dir, newPath, 'none');
    const newFileDir = await cd(dir, newPath, 'folder');

    if ([file, newFile].includes(txtFailed)) throw new Error();
    if (newFileDir !== txtFailed) {
      newFile = join(newFile, basename(file));
    }

    const streamRead = createReadStream(file);
    const streamWrite = createWriteStream(newFile);
    await new Promise((resolve, reject) => {
      streamRead.pipe(streamWrite).on('finish', resolve).on('error', reject);
    });
    if(isDel) await rm(dir, file);
  } catch {
    console.log(txtFailed);
  }
}
