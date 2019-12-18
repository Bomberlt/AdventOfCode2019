import * as fs from 'fs';

export function day5input() {
  const data = fs.readFileSync(__dirname + '/day5input.txt', 'utf-8');
  return data.split(`,`);
}
