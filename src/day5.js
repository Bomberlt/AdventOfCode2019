import { opcode1, opcode2 } from './day2';
export function opcode3(savePos, inputArray, input) {
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
    program = modifiedOneOp(program, i);
    i += 4;
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
