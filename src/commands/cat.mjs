import { createReadStream } from 'node:fs';
import { txtFailed } from '../modules/textArgs.mjs';
import cd from './cd.mjs';

export default async function cat(cur, dir) {
  const path = await cd(cur, dir);
  try {
    if (path === txtFailed) throw new Error(txtFailed);
    await new Promise((resolve, reject) => {
      const stream = createReadStream(path);
      stream.on('readable', () => {
        for (let chunk = stream.read(); chunk !== null; chunk = stream.read()) {
          console.log(chunk.toString());
        }
      });
      stream.on('end', resolve);
      stream.on('error', reject);
    });
  } catch (error) {
    console.log(txtFailed);
  }
}
