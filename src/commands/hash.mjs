import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import cd from './cd.mjs';
import { txtFailed } from '../modules/textArgs.mjs';

export default async function hash(dir, filePath) {
  try {
    const path = await cd(dir, filePath, 'file');
    if (path === txtFailed) throw new Error();

    const stream = createReadStream(path);
    const hashStream = createHash('sha256');
    await new Promise((resolve, reject) => {
      let result = '';
      stream.pipe(hashStream).setEncoding('hex')
        .on('data', (chunk) => {
          result += chunk;
        })
        .on('finish', () => {
          console.log(result);
          resolve();
        })
        .on('error', reject);
    });
  } catch {
    console.log(txtFailed);
  }
}
