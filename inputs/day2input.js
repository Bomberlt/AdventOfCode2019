import * as fs from 'fs';

export function day2input() {
  const data = fs.readFileSync(__dirname + '/day2input.txt', 'utf-8');
  return data.split(`\r\n`);
}
