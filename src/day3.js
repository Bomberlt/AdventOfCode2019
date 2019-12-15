import { move } from './day3move';
import { day3input } from '../inputs/day3input';

export function layWire(commands, wire = 0, initialTiles = []) {
  let startPos = [0, 0];
  let markedTiles = initialTiles;
  commands.forEach(command => {
    console.log('command' + command);
    const direction = command.split('')[0];
    const moves = parseInt(command.substring(1));
    markedTiles = markedTiles.concat(
      move(direction, moves, startPos, wire, markedTiles)
    );
    startPos = markedTiles[markedTiles.length - 1].pos;
    // console.log('startPos');
    // console.log(startPos);
  });
  return markedTiles;
}

export function distance(pos) {
  return Math.abs(pos[0]) + Math.abs(pos[1]);
}

export function marksTo2DArray(marks) {
  let biggestX = 0;
  let biggestY = 0;
  marks.forEach(mark => {
    if (mark.pos[0] > biggestX) biggestX = mark.pos[0];
    if (mark.pos[1] > biggestY) biggestY = mark.pos[1];
  });

  let resultArr = new Array(biggestX + 1).fill(
    new Array(biggestY + 1).fill({})
  );
  marks.forEach(mark => {
    // console.log('mark.pos[0]', mark.pos[0], 'mark.pos[1]', mark.pos[1]);
    // console.log('resultArr[mark.pos[0]][mark.pos[1]]');
    // console.log(resultArr[mark.pos[0]][mark.pos[1]]);
    resultArr[mark.pos[0]][mark.pos[1]] = { marked: mark.marked };
  });
  return resultArr;
}

export function closestDistance(cells) {
  let closestDistance = distance(cells[0].pos);
  cells.forEach(cell => {
    const dist = distance(cell.pos);
    if (dist < closestDistance) {
      closestDistance = dist;
    }
  });
  return closestDistance;
}

export function lowestSteps(cells) {
  return cells.reduce(
    (min, cell) => (cell.steps < min ? cell.steps : min),
    cells[0].steps
  );
}

export function intersectionPointClosest(wire0, wire1) {
  //console.log('wire0');
  //console.log(wire0);
  console.log('laying wire 0');
  let tiles = layWire(wire0, 0);
  console.log('laying wire 1');
  tiles = layWire(wire1, 1, tiles);
  console.log('finding closest from:');
  console.log(tiles.filter(tile => tile.marked == 'X'));
  return closestDistance(tiles.filter(tile => tile.marked == 'X'));
}

export function intersectionPointLowestSteps(wire0, wire1) {
  console.log('laying wire 0');
  let tiles = layWire(wire0, 0);
  console.log('laying wire 1');
  tiles = layWire(wire1, 1, tiles);
  console.log('finding closest from:');
  console.log(tiles.filter(tile => tile.marked == 'X'));
  return lowestSteps(tiles.filter(tile => tile.marked == 'X'));
}

export function day3() {
  const input = day3input();
  // console.log('Day2 input');
  // console.log(input);
  const output = intersectionPointClosest(input[0], input[1]);
  console.log(output);
}

export function day3part2() {
  const input = day3input();
  // console.log('Day2 input');
  // console.log(input);
  const output = intersectionPointLowestSteps(input[0], input[1]);
  console.log(output);
}
