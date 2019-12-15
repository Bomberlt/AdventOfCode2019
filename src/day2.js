import { day2input } from '../inputs/day2input';

export function opcode1(input1Index, input2Index, outputIndex, array) {
  const a = array[input1Index];
  const b = array[input2Index];
  const newArray = array.slice();
  newArray[outputIndex] = a + b;
  console.log(102);
  return newArray;
}

export function opcode2(input1Index, input2Index, outputIndex, array) {
  const a = array[input1Index];
  const b = array[input2Index];
  const newArray = array.slice();
  newArray[outputIndex] = a * b;
  console.log(102);
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
  program = program.map(x => parseInt(x));
  let i = 0;
  do {
    program = oneOp(program, i);
    i += 4;
  } while (program[i] != 99 && program[i] != undefined);
  return program;
}
export function intcodeReduce(program) {
  program = program.map(x => parseInt(x));

  return program.reduce((acc, val, i, arr) => {
    if (i % 4) {
      return acc;
    }
    if (acc[i] == 99) {
      //console.log('break' + i);
      arr.splice(1);
      return acc;
    }
    return oneOp(acc, i);
  }, program);
}

export function day2() {
  const input = day2input();
  console.log('Day2 input');
  console.log(input);
  const output = intcode(input);
  console.log('Day2 output');
  console.log(output);
  console.log('Day2 answer = ' + output[0]);
}
