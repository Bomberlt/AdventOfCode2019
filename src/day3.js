import { move } from './day3move';

export function layWire(commands, wire = 0) {
  const startPos = [0, 0];
  commands.forEach(command => {
    const direction = command.split('')[0];
    const moves = parseInt(command.split('')[1]);
    move(direction, moves, startPos, wire, []);
  });
  return null;
}
