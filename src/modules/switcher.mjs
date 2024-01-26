import { homedir } from 'node:os';
import stopWork from './end.mjs';
import pos from './position.mjs';

const CURRENT_DIR = homedir();

export default async function switcher(commandLime) {
  const cmd = commandLime.replace(/\r\n/, '').split(' ');
  switch (cmd[0]) {
    case '.exit': stopWork();
      return null;
    default: return `Invalid input\n${pos(CURRENT_DIR)}`;
  }
}
