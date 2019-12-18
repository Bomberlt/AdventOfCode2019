import { day2input, day2inputChanged } from '../inputs/day2input';

export function opcode1(
  input1Index,
  input2Index,
  outputIndex,
  array,
  intermediate1 = 0,
  intermediate2 = 0
) {
  const a = intermediate1 == 1 ? input1Index : array[input1Index];
  const b = intermediate2 == 1 ? input2Index : array[input2Index];
  const newArray = array.slice();
  const output = a + b;
  newArray[outputIndex] = output;
  //console.log(output);
  if (output == 19690720) {
    console.log(100 * input1Index + input2Index);
  }
  return newArray;
}

export function opcode2(input1Index, input2Index, outputIndex, array) {
  const a = array[input1Index];
  const b = array[input2Index];
  const newArray = array.slice();
  const output = a * b;
  newArray[outputIndex] = output;
  //console.log(output);
  if (output == 19690720) {
    console.log(100 * input1Index + input2Index);
  }
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
  const input = day2inputChanged();
  console.log('Day2 input');
  console.log(input);
  const output = intcode(input);
  console.log('Day2 output');
  console.log(output);
  console.log('Day2 answer = ' + output[0]);
}

export function day2part2() {
  const input = day2input();
  console.log('Day2 part2:');
  let found = false;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 99; j++) {
      if (!found) {
        //console.log('i:', i, 'j;', j);
        const alteredInput = [input[0], i, j, ...input.slice(3)];
        const output = intcode(alteredInput);
        if (output[0] == 19690720) {
          found = true;
          console.log('Day2 part2 answer = ' + (100 * i + j));
        }
      }
    }
  }
  if (!found) console.log('Day2 part2 answer not found :(');
}
