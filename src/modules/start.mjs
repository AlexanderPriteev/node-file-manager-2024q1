import getUserData from './getUserData.mjs';
import pos from './position.mjs';

export default function startWork() {
  const [name, homedir] = getUserData();
  console.log(`Welcome to the File Manager, ${name}!`);
  console.log(pos(homedir));
}
