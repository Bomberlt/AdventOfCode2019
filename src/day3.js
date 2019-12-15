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
    let mark = null;
    if (direction == 'R' || direction == 'L') {
      mark = '-';
      if (existingMarks.some(mark => markedVertically(mark, pos))) {
        mark = 'X';
      }
    } else {
      mark = '|';
      if (existingMarks.some(mark => markedHorizontally(mark, pos))) {
        mark = 'X';
      }
    }
    marked.push({ pos, marked: mark });
  }
  return marked;
}

function markedVertically(mark, pos) {
  return mark.pos[0] == pos[0] && mark.pos[1] == pos[1] && mark.marked == '|';
}

function markedHorizontally(mark, pos) {
  return mark.pos[0] == pos[0] && mark.pos[1] == pos[1] && mark.marked == '-';
}
