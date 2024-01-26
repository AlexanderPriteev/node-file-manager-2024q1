import { homedir } from 'node:os';
import stopWork from '../commands/exit.mjs';
import pos from './position.mjs';
import { txtInvalid, txtFailed } from './textArgs.mjs';
import up from "../commands/up.mjs";

let CURRENT_DIR = homedir();

export default async function switcher(commandLime) {
  console.log(commandLime)
  const cmd = commandLime.replace(/\r\n/, '').split(' ');
  switch (cmd[0]) {
    case '.exit': stopWork();
      break;
    case 'up': {
      CURRENT_DIR = up(CURRENT_DIR);
      break;
    }
    default: console.log(txtInvalid);
  }

  console.log(`${pos(CURRENT_DIR)}`);
}
