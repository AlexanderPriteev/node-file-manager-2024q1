import { basename, join } from 'node:path';
import cd from '../../commands/cd.mjs';
import { txtFailed } from '../textArgs.mjs';

export default async function getNewPath(dir, oldPath, newPath) {
  const file = await cd(dir, oldPath, 'file');
  let newFile = await cd(dir, newPath);
  newFile = newFile !== txtFailed ? join(newFile, basename(file)) : txtFailed;
  return [file, newFile];
}
