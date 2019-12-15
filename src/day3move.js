export function move(direction, moves, startPos, wire = 0, existingMarks = []) {
  const startX = startPos[0];
  const startY = startPos[1];
  let markedCells = [];
  for (let i = 0; i < moves; i++) {
    let pos = null;
    if (direction == 'R') pos = [startX + 1 + i, startY];
    if (direction == 'L') pos = [startX - 1 - i, startY];
    if (direction == 'U') pos = [startX, startY + 1 + i];
    if (direction == 'D') pos = [startX, startY - 1 - i];
    let toMark = null;
    const existingMarksInPos = existingMarks.filter(
      m => m.pos[0] == pos[0] && m.pos[1] == pos[1]
    );

    let wiresIntersecting;
    if (direction == 'R' || direction == 'L') {
      toMark = '-';
      wiresIntersecting = wiresIntersectingWithHorizontal(existingMarksInPos);
    } else {
      toMark = '|';
      wiresIntersecting = wiresIntersectingWithVertical(existingMarksInPos);
    }

    if (wiresIntersecting.length > 0) {
      toMark = '+';
    }
    if (wiresIntersecting.some(w => w !== wire)) {
      toMark = 'X';
    }

    markedCells.push({ pos, marked: toMark, wire: wire });
  }
  return markedCells;
}

function wiresIntersectingWithHorizontal(marks) {
  return marks
    .filter(m => m.marked == '|' || m.marked == 'X' || m.marked == '+')
    .map(m => m.wire);
}

function wiresIntersectingWithVertical(marks) {
  return marks
    .filter(m => m.marked == '-' || m.marked == 'X' || m.marked == '+')

    .map(m => m.wire);
}
