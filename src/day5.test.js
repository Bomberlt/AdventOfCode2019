import { opcode3, opcode4, callOpWithParameterMode } from './day5';

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
      const input = 999;

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

  // parameter modes
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

    //opcode3
    //opcode4
    //opcode99
  });
});
