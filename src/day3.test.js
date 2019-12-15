import { move } from './day3';

describe('day2', () => {
  //op marks to right direction
  describe('move', () => {
    describe('from 0,0', () => {
      it('right 1 marks 1 cells to right', () => {
        const result = move('R', 1, [0, 0]);

        expect(result).toContainEqual({ pos: [1, 0], marked: true });
      });

      it('right 2 marks 2 cells to right', () => {
        const result = move('R', 2, [0, 0]);

        expect(result).toContainEqual({ pos: [1, 0], marked: true });
        expect(result).toContainEqual({ pos: [2, 0], marked: true });
      });
    });
    describe('from 1,1', () => {
      it('right 1 marks 1 cells to right', () => {
        const result = move('R', 1, [1, 1]);

        expect(result).toContainEqual({ pos: [2, 1], marked: true });
      });

      it('right 2 marks 2 cells to right', () => {
        const result = move('R', 2, [1, 1]);

        expect(result).toContainEqual({ pos: [2, 1], marked: true });
        expect(result).toContainEqual({ pos: [3, 1], marked: true });
      });
    });
  });

  //move marks right amount of steps
  //move marks intersection and returns intersection data
  //array of commands executes moves
  //distance returns distance from central point
  //shortest distance returns
  // it.each`
  //   input1 | input2 | output | arr             | expectedOutput
  //   ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
  //   ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
  //   ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${1}
  //   ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${5}
  // `(
  //   '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
  //   ({ input1, input2, output, arr, expectedOutput }) => {
  //     const result = opcode1(input1, input2, output, arr);
  //     expect(result[output]).toBe(expectedOutput);
  //   }
  // );
});
