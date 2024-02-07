import process from 'node:process';
import stopWork from './commands/exit.mjs';
import startWork from './modules/start.mjs';
import setCommand from './modules/controler.mjs';

process.on('SIGINT', stopWork);
startWork();
process.stdin.pipe(setCommand).pipe(process.stdout);
