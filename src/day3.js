import { move } from './day3move';

export function layWire(commands, wire = 0) {
  let startPos = [0, 0];
  let markedTiles = [];
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
