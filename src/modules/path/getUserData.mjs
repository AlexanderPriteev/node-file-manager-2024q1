import { argv } from 'node:process';
import os from 'node:os';

export default function getUserData() {
  const { username, homedir } = os.userInfo();
  const reg = /^--username=/;
  const name = (argv.find((e) => reg.test(e)) || username).replace(reg, '');
  return [name, homedir];
}
