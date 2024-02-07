import { parse } from 'node:path';

export default function up(dir) {
  return parse(dir).dir;
}
