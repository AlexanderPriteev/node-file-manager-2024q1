import os from 'node:os';
import { txtInvalid } from '../../modules/textArgs.mjs';
import getCPU from './getCPU.mjs';

export default function osData(cmd) {
  switch (cmd) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL).replace(/"/g, ''));
      break;
    case '--cpus':
      getCPU();
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default: console.log(txtInvalid);
  }
}
