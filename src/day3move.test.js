import { move } from './day3move';

describe('day3', () => {
  // move marks to right direction
  // move marks right amount of steps
  // move marks from [0,0] and from [1,1]
  // move marks intersection and returns intersection data

  describe('move', () => {
    describe('basic', () => {
      describe('from 0,0', () => {
        describe('right', () => {
          it('1 marks 1 cells to right', () => {
            const result = move('R', 1, [0, 0]);

            expect(result).toContainEqual({
              pos: [1, 0],
              marked: '-',
              wire: 0,
              steps: 1
            });
          });

          it('1 marks current cell', () => {
            const result = move('R', 1, [0, 0]);

            expect(result).toContainEqual({
              pos: [0, 0],
              marked: '+',
              wire: 0
            });
          });

          it('2 marks 2 cells to right', () => {
            const result = move('R', 2, [0, 0]);

            expect(result).toContainEqual({
              pos: [1, 0],
              marked: '-',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [2, 0],
              marked: '-',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('left', () => {
          it('1 marks 1 cells to left', () => {
            const result = move('L', 1, [0, 0]);

            expect(result).toContainEqual({
              pos: [-1, 0],
              marked: '-',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to left', () => {
            const result = move('L', 2, [0, 0]);

            expect(result).toContainEqual({
              pos: [-1, 0],
              marked: '-',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [-2, 0],
              marked: '-',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('up', () => {
          it('1 marks 1 cells to up', () => {
            const result = move('U', 1, [0, 0]);

            expect(result).toContainEqual({
              pos: [0, 1],
              marked: '|',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to up', () => {
            const result = move('U', 2, [0, 0]);

            expect(result).toContainEqual({
              pos: [0, 1],
              marked: '|',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [0, 2],
              marked: '|',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('down', () => {
          it('1 marks 1 cells to down', () => {
            const result = move('D', 1, [0, 0]);

            expect(result).toContainEqual({
              pos: [0, -1],
              marked: '|',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to down', () => {
            const result = move('D', 2, [0, 0]);

            expect(result).toContainEqual({
              pos: [0, -1],
              marked: '|',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [0, -2],
              marked: '|',
              wire: 0,
              steps: 2
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
              marked: '-',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to right', () => {
            const result = move('R', 2, [1, 1]);

            expect(result).toContainEqual({
              pos: [2, 1],
              marked: '-',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [3, 1],
              marked: '-',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('left', () => {
          it('1 marks 1 cells to left', () => {
            const result = move('L', 1, [1, 1]);

            expect(result).toContainEqual({
              pos: [0, 1],
              marked: '-',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to left', () => {
            const result = move('L', 2, [1, 1]);

            expect(result).toContainEqual({
              pos: [0, 1],
              marked: '-',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [-1, 1],
              marked: '-',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('up', () => {
          it('1 marks 1 cells to up', () => {
            const result = move('U', 1, [1, 1]);

            expect(result).toContainEqual({
              pos: [1, 2],
              marked: '|',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to up', () => {
            const result = move('U', 2, [1, 1]);

            expect(result).toContainEqual({
              pos: [1, 2],
              marked: '|',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [1, 3],
              marked: '|',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('down', () => {
          it('1 marks 1 cells to down', () => {
            const result = move('D', 1, [1, 1]);

            expect(result).toContainEqual({
              pos: [1, 0],
              marked: '|',
              wire: 0,
              steps: 1
            });
          });

          it('2 marks 2 cells to down', () => {
            const result = move('D', 2, [1, 1]);

            expect(result).toContainEqual({
              pos: [1, 0],
              marked: '|',
              wire: 0,
              steps: 1
            });
            expect(result).toContainEqual({
              pos: [1, -1],
              marked: '|',
              wire: 0,
              steps: 2
            });
          });
        });
      });
    });

    // move marks intersection
    // move doesnt mark intersection when crosses same wire
    describe('intersections', () => {
      describe('moving horizontally', () => {
        describe('when already marked as "|"', () => {
          describe('by same wire', () => {
            it('should not mark as intersection', () => {
              const existingMarks = [
                { pos: [1, 0], marked: '|', wire: 0, steps: 1 }
              ];
              const newMarks = move('R', 2, [0, 0], 0, existingMarks);

              expect(newMarks).not.toContainEqual({
                pos: [1, 0],
                marked: 'X'
              });
              expect(newMarks).toContainEqual({
                pos: [1, 0],
                marked: '+',
                wire: 0,
                steps: 2
              });
            });
          });

          describe('by other wire', () => {
            it('should mark as intersection', () => {
              const existingMarks = [
                { pos: [1, 0], marked: '|', wire: 1, steps: 1 }
              ];
              const newMarks = move('R', 2, [0, 0], 0, existingMarks);

              expect(newMarks).toContainEqual({
                pos: [1, 0],
                marked: 'X',
                wire: 0,
                steps: 2
              });
            });
          });
        });
        describe('when already marked as intersection', () => {
          it('should mark as intersection', () => {
            const existingMarks = [{ pos: [1, 0], marked: 'X', steps: 1 }];
            const newMarks = move('R', 2, [0, 0], 0, existingMarks);

            expect(newMarks).toContainEqual({
              pos: [1, 0],
              marked: 'X',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('when already marked as "-"', () => {
          it('should not mark as intersection', () => {
            const existingMarks = [{ pos: [1, 0], marked: '-' }];
            const newMarks = move('R', 2, [0, 0], 0, existingMarks);

            expect(newMarks).not.toContainEqual({
              pos: [1, 0],
              marked: 'X',
              wire: 0
            });
          });
        });

        describe('when not marked', () => {
          it('should not mark as intersection', () => {
            const newMarks = move('R', 2, [0, 0]);

            expect(newMarks).not.toContainEqual({
              pos: [1, 0],
              marked: 'X'
            });
          });
        });
      });
      describe('moving vertically', () => {
        describe('by same wire', () => {
          describe('when already marked as "-"', () => {
            it('should not mark as intersection', () => {
              const existingMarks = [
                { pos: [0, 1], marked: '-', wire: 0, steps: 1 }
              ];
              const newMarks = move('U', 2, [0, 0], 0, existingMarks);

              expect(newMarks).not.toContainEqual({
                pos: [0, 1],
                marked: 'X',
                wire: 0
              });
              expect(newMarks).toContainEqual({
                pos: [0, 1],
                marked: '+',
                wire: 0,
                steps: 2
              });
            });
          });
        });

        describe('by other wire', () => {
          describe('when already marked as "-"', () => {
            it('should mark as intersection', () => {
              const existingMarks = [
                { pos: [0, 1], marked: '-', wire: 1, steps: 1 }
              ];
              const newMarks = move('U', 2, [0, 0], 0, existingMarks);

              expect(newMarks).toContainEqual({
                pos: [0, 1],
                marked: 'X',
                wire: 0,
                steps: 2
              });
            });
          });
        });

        describe('when already marked as "-"', () => {
          it('should mark as intersection', () => {
            const existingMarks = [{ pos: [0, 1], marked: 'X', steps: 1 }];
            const newMarks = move('U', 2, [0, 0], 0, existingMarks);

            expect(newMarks).toContainEqual({
              pos: [0, 1],
              marked: 'X',
              wire: 0,
              steps: 2
            });
          });
        });

        describe('when already marked as "|"', () => {
          it('should not mark as intersection', () => {
            const existingMarks = [{ pos: [0, 1], marked: '|' }];
            const newMarks = move('U', 2, [0, 0], existingMarks);

            expect(newMarks).not.toContainEqual({
              pos: [0, 1],
              marked: 'X',
              wire: 0
            });
          });
        });

        describe('when not marked', () => {
          it('should not mark as intersection', () => {
            const newMarks = move('U', 2, [0, 0]);

            expect(newMarks).not.toContainEqual({
              pos: [0, 1],
              marked: 'X'
            });
          });
        });
      });
    });
  });
});
