import {
  opcode3,
  opcode4,
  callOpWithParameterMode,
  modifiedIntcode
} from './day5';

describe('day5', () => {
  const originalLog = console.log;
  afterEach(() => (console.log = originalLog));

  describe('opcode3', () => {
    it.each`
      savePos | arr
      ${1}    | ${[3, 0, 0, 0]}
      ${2}    | ${[3, 1, 1, 1]}
      ${3}    | ${[3, 0, 1, 1]}
      ${4}    | ${[3, 2, 3, 1]}
    `('$savePos | $arr saves input to $savePos', ({ savePos, arr }) => {
      const input = 2;

      const result = opcode3(savePos, arr, input);

      expect(result[savePos]).toBe(input);
    });
  });

  describe('opcode4', () => {
    let consoleOutput = null;
    const mockedLog = output => (consoleOutput = output);
    beforeEach(() => {
      consoleOutput = null;
      console.log = mockedLog;
    });
    it.each`
      param | arr             | expected
      ${0}  | ${[4, 0, 0, 0]} | ${4}
      ${1}  | ${[4, 1, 1, 1]} | ${1}
      ${2}  | ${[4, 0, 0, 1]} | ${0}
      ${3}  | ${[4, 2, 3, 1]} | ${1}
    `(
      '$param | $arr outputs $param `rd value ($expected )',
      ({ param, arr, expected }) => {
        opcode4(param, arr);

        expect(consoleOutput).toBe(expected);
      }
    );
  });

  describe('callOpWithParameterMode', () => {
    describe('opcode1', () => {
      describe('param modes 0 0 0', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${1}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${5}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 0;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              1,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });

      describe('param modes 0 0 1', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${1}
          ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${4}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 1;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              1,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });

      describe('param modes 0 1 0', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${3}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${4}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 10;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              1,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });
    });

    describe('opcode2', () => {
      describe('param modes 0 0 0', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${6}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput 000',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 0;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              2,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });

      describe('param modes 0 0 1', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 1, 1]} | ${1}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${1}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${3}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 1;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              2,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });

      describe('param modes 0 1 0', () => {
        it.each`
          input1 | input2 | output | arr             | expectedOutput
          ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
          ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${0}
          ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${4}
        `(
          '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
          ({ input1, input2, output, arr, expectedOutput }) => {
            const paramsMode = 10;
            const result = callOpWithParameterMode(
              paramsMode,
              arr,
              2,
              input1,
              input2,
              output
            );

            expect(result[output]).toBe(expectedOutput);
          }
        );
      });
    });

    describe('opcode4', () => {
      describe('param modes 0 0 0', () => {
        let consoleOutput = null;
        const mockedLog = output => (consoleOutput = output);
        beforeEach(() => {
          consoleOutput = null;
          console.log = mockedLog;
        });
        it.each`
          param | arr             | expected
          ${0}  | ${[4, 0, 0, 0]} | ${4}
          ${1}  | ${[4, 1, 1, 1]} | ${1}
          ${2}  | ${[4, 0, 0, 1]} | ${0}
          ${3}  | ${[4, 2, 3, 1]} | ${1}
        `(
          '$param | $arr outputs $param `rd value ($expected )',
          ({ param, arr, expected }) => {
            const paramsMode = 0;
            callOpWithParameterMode(paramsMode, arr, 4, param);

            expect(consoleOutput).toBe(expected);
          }
        );
      });

      describe('param modes 0 0 1', () => {
        let consoleOutput = null;
        const mockedLog = output => (consoleOutput = output);
        beforeEach(() => {
          consoleOutput = null;
          console.log = mockedLog;
        });
        it.each`
          param | arr             | expected
          ${0}  | ${[4, 0, 0, 0]} | ${0}
          ${1}  | ${[4, 1, 1, 1]} | ${1}
          ${2}  | ${[4, 0, 0, 1]} | ${2}
          ${3}  | ${[4, 2, 3, 1]} | ${3}
        `('$param | $arr outputs $param', ({ param, arr, expected }) => {
          const paramsMode = 1;
          callOpWithParameterMode(paramsMode, arr, 4, param);

          expect(consoleOutput).toBe(expected);
        });
      });
    });
  });

  describe('modifiedIntCode', () => {
    it.each`
      input                                         | output
      ${[99]}                                       | ${[99]}
      ${[1, 0, 0, 0, 99]}                           | ${[2, 0, 0, 0, 99]}
      ${[2, 3, 0, 3, 99]}                           | ${[2, 3, 0, 6, 99]}
      ${[2, 4, 4, 5, 99, 0]}                        | ${[2, 4, 4, 5, 99, 9801]}
      ${[1, 1, 1, 4, 99, 5, 6, 0, 99]}              | ${[30, 1, 1, 4, 2, 5, 6, 0, 99]}
      ${[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]} | ${[3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]}
      ${[1, 0, 0, 0, 1, 0, 0, 4, 99]}               | ${[2, 0, 0, 0, 4, 0, 0, 4, 99]}
      ${[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 99]}   | ${[8, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 99]}
      ${['1', '0', '0', '0', '99']}                 | ${[2, 0, 0, 0, 99]}
      ${[1002, 4, 3, 4, 33]}                        | ${[1002, 4, 3, 4, 99]}
      ${[1101, 100, -1, 4, 0]}                      | ${[1101, 100, -1, 4, 99]}
      ${[3, 1, 99]}                                 | ${[3, 2, 99]}
      ${[3, 2, 1, 2, 2, 5, 99]}                     | ${[3, 2, 2, 2, 2, 4, 99]}
    `('$input | $output ', ({ input, output }) => {
      // 0  1  2  3  4  5  6  7
      const result = modifiedIntcode(input);

      if (output.length == 1) {
        expect(result.length).toBe(1);
        expect(result[0]).toBe(output[0]);
      } else {
        expect(result).toEqual(output);
      }
    });
  });
});
