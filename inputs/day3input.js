import * as fs from 'fs';

export function day3input() {
  const data = fs.readFileSync(__dirname + '/day3input.txt', 'utf-8');
  const twoWires = data.split(`\r\n`);
  return twoWires.map(wireData => wireData.split(','));
}
