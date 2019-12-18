import { opcode1, opcode2 } from './day2';
import { day5input } from '../inputs/day5input';

export function opcode3(savePos, inputArray, input = 2) {
  const newArray = inputArray.slice();
  newArray[savePos] = input;
  return newArray;
}

export function opcode4(param, arr, immediate) {
  if (immediate) {
    console.log(param);
  } else {
    console.log(arr[param]);
  }
  return arr;
}

export function callOpWithParameterMode(
  paramsMode,
  arr,
  op,
  input1,
  input2,
  input3
) {
  if (paramsMode == 0) {
    if (op == 1) {
      return opcode1(input1, input2, input3, arr);
    }
    if (op == 2) {
      return opcode2(input1, input2, input3, arr);
    }
    if (op == 3) {
      return opcode3(input1, arr);
    }
    return opcode4(input1, arr);
  }

  const firstParamImmediate = paramsMode % 10 == 1;
  const secondParamImmediate = Math.floor(paramsMode / 10) % 10 == 1;
  if (op == 1) {
    return opcode1(
      input1,
      input2,
      input3,
      arr,
      firstParamImmediate,
      secondParamImmediate
    );
  }

  if (op == 2) {
    return opcode2(
      input1,
      input2,
      input3,
      arr,
      firstParamImmediate,
      secondParamImmediate
    );
  }

  return opcode4(input1, arr, firstParamImmediate);
}

export function modifiedIntcode(program) {
  program = program.map(x => parseInt(x));
  if (program[0] == 99) return program;
  let i = 0;
  do {
    const moveOpIndex = program[i] == 3 || program[i] == 4 ? 2 : 4;
    program = modifiedOneOp(program, i);
    i += moveOpIndex;
  } while (program[i] != 99 && program[i] != undefined);
  return program;
}

function modifiedOneOp(program, opIndex) {
  const op = program[opIndex] % 100;
  const paramsMode = Math.floor(program[opIndex] / 100);
  return callOpWithParameterMode(
    paramsMode,
    program,
    op,
    program[opIndex + 1],
    program[opIndex + 2],
    program[opIndex + 3]
  );
}

export function day5() {
  const input = day5input();
  console.log('Day5 input');
  console.log(input);
  console.log('Day5 answer = ');
  const output = modifiedIntcode(input);
  console.log('Day5 output');
  console.log(output);
}
