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
