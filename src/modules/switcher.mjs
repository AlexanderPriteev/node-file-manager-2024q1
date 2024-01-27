import { homedir } from 'node:os';
import { txtInvalid, txtFailed } from './textArgs.mjs';
import stopWork from '../commands/exit.mjs';
import pos from './position.mjs';
import up from '../commands/up.mjs';
import cd from '../commands/cd.mjs';
import ls from '../commands/ls.mjs';
import cat from '../commands/cat.mjs';
import add from '../commands/add.mjs';
import rn from '../commands/rn.mjs';

let CURRENT_DIR = homedir();

export default async function switcher(commandLime) {
  const cmd = commandLime.replace(/\r\n/, '').split(' ');
  switch (cmd[0]) {
    case '.exit': stopWork();
      break;
    case 'up': {
      CURRENT_DIR = up(CURRENT_DIR);
      break;
    }
    case 'cd': {
      const newPath = await cd(CURRENT_DIR, cmd[1]);
      if (newPath === txtFailed) console.log(txtFailed);
      else CURRENT_DIR = newPath;
      break;
    }
    case 'ls': {
      await ls(CURRENT_DIR);
      break;
    }
    case 'cat': {
      await cat(CURRENT_DIR, cmd[1]);
      break;
    }
    case 'add': {
      await add(CURRENT_DIR, cmd[1]);
      break;
    }
    case 'rn': {
      await rn(CURRENT_DIR, cmd[1], cmd[2]);
      break;
    }
    default: console.log(txtInvalid);
  }

  console.log(`${pos(CURRENT_DIR)}`);
}
