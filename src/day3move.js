export function move(direction, moves, startPos, wire = 0, existingMarks = []) {
  const startX = startPos[0];
  const startY = startPos[1];
  const lastStep =
    existingMarks.length > 0 ? existingMarks[existingMarks.length - 1] : null;
  const stepsTaken = lastStep
    ? lastStep.wire == wire
      ? lastStep.steps
      : 0
    : 0;
  let markedCells = [{ pos: startPos, marked: '+', wire }];
  for (let i = 0; i < moves; i++) {
    let pos = null;
    if (direction == 'R') pos = [startX + 1 + i, startY];
    if (direction == 'L') pos = [startX - 1 - i, startY];
    if (direction == 'U') pos = [startX, startY + 1 + i];
    if (direction == 'D') pos = [startX, startY - 1 - i];
    let toMark = null;
    const existingMarksInPos = existingMarks
      .filter(m => m.pos[0] == pos[0])
      .filter(m => m.pos[1] == pos[1]);

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
    let crossingSteps = 0;
    if (wiresIntersecting.some(w => w.wire !== wire)) {
      toMark = 'X';
      crossingSteps = lowestSteps(
        wiresIntersecting.filter(w => w.wire !== wire)
      );
      console.log('crossingSteps');
      console.log(crossingSteps);
    }

    markedCells.push({
      pos,
      marked: toMark,
      wire: wire,
      steps: crossingSteps + stepsTaken + i + 1
    });
  }
  return markedCells;
}

function lowestSteps(marks) {
  console.log(marks);
  return marks.reduce(
    (min, mark) => (mark.steps < min ? mark.steps : min),
    marks[0].steps
  );
}

function wiresIntersectingWithHorizontal(marks) {
  return marks
    .filter(m => m.marked == '|' || m.marked == 'X' || m.marked == '+')
    .map(m => m);
}

function wiresIntersectingWithVertical(marks) {
  return marks
    .filter(m => m.marked == '-' || m.marked == 'X' || m.marked == '+')

    .map(m => m);
}
