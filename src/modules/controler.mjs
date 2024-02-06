import { Transform } from 'node:stream';
import switcher from './switcher.mjs';

export default new Transform({
  async transform(chunk, encoding, callback) {
    await switcher(chunk.toString());
    callback();
  },
});
