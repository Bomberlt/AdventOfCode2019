import * as fs from 'fs';

export function day1input() {
  const data = fs.readFileSync(__dirname + '/day1input.txt', 'utf-8');
  return data.split(`\r\n`);
}
