import getUserData from './path/getUserData.mjs';
import pos from './path/position.mjs';
import { txtWelcome } from './textArgs.mjs';

export default function startWork() {
  const [name, homedir] = getUserData();
  console.log(`${txtWelcome}, ${name}!`);
  console.log(pos(homedir));
}
