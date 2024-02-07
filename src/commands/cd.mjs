import { parse, join, normalize } from 'node:path';
import { stat } from 'node:fs/promises';
import isCorrectPath from '../modules/path/checkPath.mjs';
import { txtFailed } from '../modules/textArgs.mjs';

export default async function cd(cur, dir, isValidate = 'folder') {
  if (!dir) return txtFailed;
  const newDir = normalize(dir);
  const isAbsolutePath = !!parse(newDir).root;
  const newPath = isAbsolutePath ? newDir : join(cur, newDir);
  if (isValidate === 'none') return newPath;
  const isCorrect = await isCorrectPath(newPath);
  let isDirectory = true;
  if (isCorrect && isValidate === 'folder') {
    isDirectory = (await stat(newPath)).isDirectory();
  }
  return isCorrect && isDirectory ? newPath : txtFailed;
}
