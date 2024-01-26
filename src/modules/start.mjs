import getUserData from './getUserData.mjs';
import pos from './position.mjs';
import { txtWelcome } from './textArgs.mjs';

export default function startWork() {
  const [name, homedir] = getUserData();
  console.log(`${txtWelcome}, ${name}!`);
  console.log(pos(homedir));
}
