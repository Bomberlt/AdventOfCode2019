export function move(direction, moves, startPos) {
  const startX = startPos[0];
  const startY = startPos[1];
  let marked = [];
  for (let i = 0; i < moves; i++) {
    const pos =
      direction == 'R' ? [startX + 1 + i, startY] : [startX - 1 - i, startY];
    marked.push({ pos, marked: true });
  }
  return marked;
}
