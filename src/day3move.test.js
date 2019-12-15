import { move } from './day3';

describe('day3', () => {
  //move marks to right direction
  //move marks right amount of steps
  //move marks from [0,0] and from [1,1]
  //move marks intersection and returns intersection data

  describe('move', () => {
    describe('from 0,0', () => {
      describe('right', () => {
        it('1 marks 1 cells to right', () => {
          const result = move('R', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: '|'
          });
        });

        it('2 marks 2 cells to right', () => {
          const result = move('R', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [2, 0],
            marked: '|'
          });
        });
      });

      describe('left', () => {
        it('1 marks 1 cells to left', () => {
          const result = move('L', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [-1, 0],
            marked: '|'
          });
        });

        it('2 marks 2 cells to left', () => {
          const result = move('L', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [-1, 0],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [-2, 0],
            marked: '|'
          });
        });
      });

      describe('up', () => {
        it('1 marks 1 cells to up', () => {
          const result = move('U', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: '|'
          });
        });

        it('2 marks 2 cells to up', () => {
          const result = move('U', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [0, 2],
            marked: '|'
          });
        });
      });

      describe('down', () => {
        it('1 marks 1 cells to down', () => {
          const result = move('D', 1, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, -1],
            marked: '|'
          });
        });

        it('2 marks 2 cells to down', () => {
          const result = move('D', 2, [0, 0]);

          expect(result).toContainEqual({
            pos: [0, -1],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [0, -2],
            marked: '|'
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
            marked: '|'
          });
        });

        it('2 marks 2 cells to right', () => {
          const result = move('R', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [2, 1],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [3, 1],
            marked: '|'
          });
        });
      });

      describe('left', () => {
        it('1 marks 1 cells to left', () => {
          const result = move('L', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: '|'
          });
        });

        it('2 marks 2 cells to left', () => {
          const result = move('L', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [0, 1],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [-1, 1],
            marked: '|'
          });
        });
      });

      describe('up', () => {
        it('1 marks 1 cells to up', () => {
          const result = move('U', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 2],
            marked: '|'
          });
        });

        it('2 marks 2 cells to up', () => {
          const result = move('U', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 2],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [1, 3],
            marked: '|'
          });
        });
      });

      describe('down', () => {
        it('1 marks 1 cells to down', () => {
          const result = move('D', 1, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: '|'
          });
        });

        it('2 marks 2 cells to down', () => {
          const result = move('D', 2, [1, 1]);

          expect(result).toContainEqual({
            pos: [1, 0],
            marked: '|'
          });
          expect(result).toContainEqual({
            pos: [1, -1],
            marked: '|'
          });
        });
      });
    });

    //move marks intersection and returns intersection data
    //move doesnt mark intersection when crosses same wire
    describe('moving horizontally', () => {
      describe('when already marked as "|" or "+"', () => {
        it('should mark as intersection', () => {
          const existingMarks = [{ pos: [1, 0], marked: '|' }];
          const newMarks = move('R', 2, [0, 0], existingMarks);

          expect(newMarks).toContainEqual({ pos: [1, 0], marked: 'X' });
        });
      });
      // describe('when already marked as "-"', () => {
      //   it('should not mark as intersection', () => {
      //     const existingMarks = [{ pos: [1, 0], marked: '-' }];
      //     const newMarks = move('R', 2, [0, 0], existingMarks);

      //     expect(newMarks).not.toContainEqual({ pos: [1, 0], marked: 'X' });
      //   });
      // });
      describe('when not marked', () => {
        it('should not mark as intersection', () => {
          const newMarks = move('R', 2, [0, 0]);

          expect(newMarks).not.toContainEqual({ pos: [1, 0], marked: 'X' });
        });
      });
    });
  });
});
