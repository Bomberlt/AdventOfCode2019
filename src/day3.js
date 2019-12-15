export function move(direction, moves, startPos, existingMarks = []) {
  const startX = startPos[0];
  const startY = startPos[1];
  let marked = [];
  for (let i = 0; i < moves; i++) {
    let pos = null;
    if (direction == 'R') pos = [startX + 1 + i, startY];
    if (direction == 'L') pos = [startX - 1 - i, startY];
    if (direction == 'U') pos = [startX, startY + 1 + i];
    if (direction == 'D') pos = [startX, startY - 1 - i];
    let mark = '|';
    if (
      existingMarks.some(mark => mark.pos[0] == pos[0] && mark.pos[1] == pos[1])
    ) {
      mark = 'X';
    }
    marked.push({ pos, marked: mark });
  }
  return marked;
}
