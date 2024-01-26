import { exit } from 'node:process';
import getUserData from './getUserData.mjs';

export default function stopWork() {
  const [name] = getUserData();
  console.log(`Thank you for using File Manager, ${name}, goodbye!`);
  exit();
}
