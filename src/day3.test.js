import { move } from './day3';

describe('day3', () => {
  //op marks to right direction
  //move marks right amount of steps
  describe('move', () => {
    describe('from 0,0', () => {
      describe('right', () => {
        it('1 marks 1 cells to right', () => {
          const result = move('R', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: true
          });
        });

        it('2 marks 2 cells to right', () => {
          const result = move('R', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [2, 0],
            marked: true
          });
        });
      });

      describe('left', () => {
        it('1 marks 1 cells to left', () => {
          const result = move('L', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [-1, 0],
            marked: true
          });
        });

        it('2 marks 2 cells to left', () => {
          const result = move('L', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [-1, 0],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [-2, 0],
            marked: true
          });
        });
      });

      describe('up', () => {
        it('1 marks 1 cells to up', () => {
          const result = move('U', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: true
          });
        });

        it('2 marks 2 cells to up', () => {
          const result = move('U', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [0, 2],
            marked: true
          });
        });
      });

      describe('down', () => {
        it('1 marks 1 cells to down', () => {
          const result = move('D', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, -1],
            marked: true
          });
        });

        it('2 marks 2 cells to down', () => {
          const result = move('D', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, -1],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [0, -2],
            marked: true
          });
        });
      });
    });
    describe('from 1,1', () => {
      describe('right', () => {
        it('1 marks 1 cells to right', () => {
          const result = move('R', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [2, 1],
            marked: true
          });
        });

        it('2 marks 2 cells to right', () => {
          const result = move('R', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [2, 1],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [3, 1],
            marked: true
          });
        });
      });

      describe('left', () => {
        it('1 marks 1 cells to left', () => {
          const result = move('L', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: true
          });
        });

        it('2 marks 2 cells to left', () => {
          const result = move('L', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [-1, 1],
            marked: true
          });
        });
      });

      describe('up', () => {
        it('1 marks 1 cells to up', () => {
          const result = move('U', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 2],
            marked: true
          });
        });

        it('2 marks 2 cells to up', () => {
          const result = move('U', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 2],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [1, 3],
            marked: true
          });
        });
      });

      describe('down', () => {
        it('1 marks 1 cells to down', () => {
          const result = move('D', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: true
          });
        });

        it('2 marks 2 cells to down', () => {
          const result = move('D', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: true
          });
          expect(result).toContainEqual({
            pos: [1, -1],
            marked: true
          });
        });
      });
    });
  });

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
