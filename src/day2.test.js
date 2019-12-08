import { opcode1, opcode2, intcode } from './day2';

describe('day1', () => {
  describe('opcode1', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${5}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode1(input1, input2, output, arr);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });

  describe('opcode2', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${6}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode2(input1, input2, output, arr);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });

  describe('intcode', () => {
    it.each`
      input                                         | output
      ${[1, 0, 0, 0, 99]}                           | ${[2, 0, 0, 0, 99]}
      ${[2, 3, 0, 3, 99]}                           | ${[2, 3, 0, 6, 99]}
      ${[2, 4, 4, 5, 99, 0]}                        | ${[2, 4, 4, 5, 99, 9801]}
      ${[1, 1, 1, 4, 99, 5, 6, 0, 99]}              | ${[30, 1, 1, 4, 2, 5, 6, 0, 99]}
      ${[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]} | ${[3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]}
      ${[1, 0, 0, 0, 1, 0, 0, 4, 99]}               | ${[2, 0, 0, 0, 4, 0, 0, 4, 99]}
      ${[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 99]}   | ${[8, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 99]}
    `('$input | $output ', ({ input, output }) => {
      const result = intcode(input);

      expect(result).toEqual(output);
    });
  });
});
