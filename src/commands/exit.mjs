import { exit } from 'node:process';
import getUserData from '../modules/path/getUserData.mjs';
import { txtBye } from '../modules/textArgs.mjs';

export default function stopWork() {
  const [name] = getUserData();
  console.log(`${txtBye}, ${name}, goodbye!`);
  exit();
}
