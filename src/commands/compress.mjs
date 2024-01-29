import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { txtFailed } from '../modules/textArgs.mjs';
import getNewPath from '../modules/path/getNewPath.mjs';

export default async function compress(isCompress, dir, filePath, newDir) {
  try {
    const [file, path] = await getNewPath(dir, filePath, newDir);
    if ([file, path].includes(txtFailed)) throw new Error();
    const newFile = isCompress ? `${path}.br` : path.replace(/.br$/, '');

    const compressStream = isCompress ? createBrotliCompress() : createBrotliDecompress();
    const streamRead = createReadStream(file);
    const streamWrite = createWriteStream(newFile);
    await pipeline(streamRead, compressStream, streamWrite);
  } catch {
    console.log(txtFailed);
  }
}
