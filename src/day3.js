import { move } from './day3move';

export function layWire(commands, wire = 0, initialTiles = []) {
  let startPos = [0, 0];
  let markedTiles = initialTiles;
  commands.forEach(command => {
    const direction = command.split('')[0];
    const moves = parseInt(command.split('')[1]);
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

export function intersectionPointClosest(wire0, wire1) {
  console.log('wire0');
  console.log(wire0);
  let tiles = layWire(wire0, 0);
  tiles = layWire(wire1, 1, tiles);
  console.log(tiles.filter(tile => tile.marked == 'X'));
  return closestDistance(tiles.filter(tile => tile.marked == 'X'));
}
