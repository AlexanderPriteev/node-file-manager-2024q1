import { parse, join, normalize } from 'node:path';
import isCorrectPath from '../modules/checkPath.mjs';
import { txtFailed } from '../modules/textArgs.mjs';

export default async function cd(cur, dir) {
  if (!dir) return txtFailed;
  const newDir = normalize(dir);
  const isAbsolutePath = !!parse(newDir).root;
  const newPath = isAbsolutePath ? newDir : join(cur, newDir);
  const isCorrect = await isCorrectPath(newPath);
  return isCorrect ? newPath : txtFailed;
}
