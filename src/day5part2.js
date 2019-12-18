export function opcode5(param1, param2, arr, immediate1 = 0, immediate2 = 0) {
  const a = immediate1 == 1 ? param1 : arr[param1];
  if (a !== 0) {
    return immediate2 == 1 ? param2 : arr[param2];
  }
  return null;
}

export function opcode6(param1, param2, arr, immediate1 = 0, immediate2 = 0) {
  const a = immediate1 == 1 ? param1 : arr[param1];
  if (a == 0) {
    return immediate2 == 1 ? param2 : arr[param2];
  }
  return null;
}

export function opcode7(
  input1,
  input2,
  output,
  arr,
  immediate1 = 0,
  immediate2 = 0
) {
  const a = immediate1 == 1 ? input1 : arr[input1];
  const b = immediate2 == 1 ? input2 : arr[input2];

  let result = 0;
  if (a < b) {
    result = 1;
  }

  const newArray = arr.slice();
  newArray[output] = result;
  return newArray;
}

export function opcode8(
  input1,
  input2,
  output,
  arr,
  immediate1 = 0,
  immediate2 = 0
) {
  const a = immediate1 == 1 ? input1 : arr[input1];
  const b = immediate2 == 1 ? input2 : arr[input2];

  let result = 0;
  if (a == b) {
    result = 1;
  }

  const newArray = arr.slice();
  newArray[output] = result;
  return newArray;
}
