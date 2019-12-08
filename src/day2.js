import { day2input } from '../inputs/day2input';

export function opcode1(input1Index, input2Index, outputIndex, array) {
  const a = array[input1Index];
  const b = array[input2Index];
  const newArray = array.slice();
  newArray[outputIndex] = a + b;
  return newArray;
}

export function opcode2(input1Index, input2Index, outputIndex, array) {
  const a = array[input1Index];
  const b = array[input2Index];
  const newArray = array.slice();
  newArray[outputIndex] = a * b;
  return newArray;
}

export function oneOp(program, opIndex) {
  if (program[opIndex] == 1)
    return opcode1(
      program[opIndex + 1],
      program[opIndex + 2],
      program[opIndex + 3],
      program
    );
  return opcode2(
    program[opIndex + 1],
    program[opIndex + 2],
    program[opIndex + 3],
    program
  );
}

export function intcode(program) {
  let i = 0;
  const afterOneOp = oneOp(program, i);
  i += 4;
  //console.log(afterOneOp[i]);
  if (afterOneOp[i] == 99) return afterOneOp;
  return oneOp(afterOneOp, i);
}

console.log(intcode(day2input()));
