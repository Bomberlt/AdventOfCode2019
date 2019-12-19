import { opcode5, opcode6, opcode7, opcode8 } from './day5part2';
import { modifiedIntcode } from './day5';

describe('opcode5', () => {
  describe('param modes 0 0 0', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[5, 0, 0]} | ${null}
      ${1}   | ${2}   | ${[5, 1, 0]} | ${0}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${0}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode5(param1, param2, arr);
        expect(result).toEqual(expectedOutput);
      }
    );
  });

  describe('param modes 0 0 1', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[5, 0, 0]} | ${0}
      ${1}   | ${2}   | ${[5, 1, 0]} | ${0}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${null}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode5(param1, param2, arr, 1);
        expect(result).toEqual(expectedOutput);
      }
    );
  });

  describe('param modes 0 1 0', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[5, 0, 0]} | ${null}
      ${1}   | ${2}   | ${[5, 1, 0]} | ${2}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${2}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode5(param1, param2, arr, 0, 1);
        expect(result).toEqual(expectedOutput);
      }
    );
  });
});

describe('opcode6', () => {
  describe('param modes 0 0 0', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[6, 0, 0]} | ${0}
      ${1}   | ${2}   | ${[6, 1, 0]} | ${null}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${null}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode6(param1, param2, arr);
        expect(result).toEqual(expectedOutput);
      }
    );
  });

  describe('param modes 0 0 1', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[6, 0, 0]} | ${null}
      ${1}   | ${2}   | ${[6, 1, 0]} | ${null}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${0}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode6(param1, param2, arr, 1);
        expect(result).toEqual(expectedOutput);
      }
    );
  });

  describe('param modes 0 1 0', () => {
    it.each`
      param1 | param2 | arr          | expectedOutput
      ${1}   | ${2}   | ${[6, 0, 0]} | ${2}
      ${1}   | ${2}   | ${[6, 1, 0]} | ${null}
      ${0}   | ${2}   | ${[5, 1, 0]} | ${null}
    `(
      '$param1 | $param2 | $arr returns $expectedOutput',
      ({ param1, param2, arr, expectedOutput }) => {
        const result = opcode6(param1, param2, arr, 0, 1);
        expect(result).toEqual(expectedOutput);
      }
    );
  });
});

describe('opcode7', () => {
  describe('param modes 0 0 0', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${1}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode7(input1, input2, output, arr);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });

  describe('param modes 0 0 1', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${1}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode7(input1, input2, output, arr, 1);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });
  describe('param modes 0 1 0', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${0}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode7(input1, input2, output, arr, 0, 1);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });
});

describe('opcode8', () => {
  describe('param modes 0 0 0', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${0}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode8(input1, input2, output, arr);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });

  describe('param modes 0 0 1', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${1}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${0}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode8(input1, input2, output, arr, 1);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });

  describe('param modes 0 1 0', () => {
    it.each`
      input1 | input2 | output | arr             | expectedOutput
      ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 1, 0, 0]} | ${0}
      ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 0]} | ${1}
    `(
      '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
      ({ input1, input2, output, arr, expectedOutput }) => {
        const result = opcode8(input1, input2, output, arr, 0, 1);

        expect(result[output]).toBe(expectedOutput);
      }
    );
  });
});

describe('modifiedIntCode', () => {
  const originalLog = console.log;
  afterEach(() => (console.log = originalLog));

  let consoleOutput = null;
  const mockedLog = output => (consoleOutput = output);
  beforeEach(() => {
    consoleOutput = null;
    console.log = mockedLog;
  });

  const programInput = 2;
  describe('input; compare to 8; output', () => {
    it.each`
      input                                   | output                                 | expected
      ${[3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]} | ${[3, 9, 8, 9, 10, 9, 4, 9, 99, 0, 8]} | ${0}
      ${[3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]} | ${[3, 9, 7, 9, 10, 9, 4, 9, 99, 1, 8]} | ${1}
      ${[3, 3, 1108, -1, 8, 3, 4, 3, 99]}     | ${[3, 3, 1108, 0, 8, 3, 4, 3, 99]}     | ${0}
      ${[3, 3, 1107, -1, 8, 3, 4, 3, 99]}     | ${[3, 3, 1107, 1, 8, 3, 4, 3, 99]}     | ${1}
    `('$input | $output | $expected', ({ input, output, expected }) => {
      // 0  1  2  3  4   5  6  7  8    9  10
      const result = modifiedIntcode(input);

      expect(result).toEqual(output);
      expect(consoleOutput).toBe(expected);
    });
  });

  describe('jump tests', () => {
    it.each`
      input                                                        | output                                                       | expected
      ${[3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]} | ${[3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]} | ${0}
    `('$input | $output | $expected', ({ input, output, expected }) => {
      // 0  1  2  3  4   5  6  7  8    9  10
      const result = modifiedIntcode(input);

      expect(result).toEqual(output);
      expect(consoleOutput).toBe(expected);
    });
  });
});
