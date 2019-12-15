import { layWire } from './day3';
import * as day3move from './day3move';

describe('day3', () => {
  //TODO: Maybe add '+' on corners
  describe('layWire', () => {
    // layWire executes moves
    describe('given R3 and U4', () => {
      let calls = [];
      const mockedMoveResponsePos = [1, 1];
      day3move.move = jest.fn(
        (direction, moves, startPos, wire, existingMarks) => {
          calls.push({
            direction,
            moves,
            startPos,
            wire,
            existingMarks
          });
          return [{ pos: [1, 1] }];
        }
      );

      it('calls move twice', () => {
        layWire(['R3', 'U4'], 1, []);

        expect(day3move.move).toBeCalledTimes(2);
      });

      it('calls move right', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              direction: 'R',
              moves: 3
            })
          ])
        );
      });

      it('calls move up', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              direction: 'U',
              moves: 4
            })
          ])
        );
      });

      it('calls move up with adjusted pos', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              startPos: mockedMoveResponsePos
            })
          ])
        );
      });

      it('calls move with correct wire', () => {
        expect(calls).toEqual(
          expect.arrayContaining([expect.objectContaining({ wire: 1 })])
        );
      });
    });

    describe('given L5 and D6 and R1', () => {
      let calls = [];
      it('calls move left down and right', () => {
        day3move.move = jest.fn(
          (direction, moves, startPos, wire, existingMarks) => {
            calls.push({
              direction,
              moves,
              startPos,
              wire,
              existingMarks
            });
            return [{ pos: [1, 1] }];
          }
        );

        layWire(['L5', 'D6', 'R1'], 0, []);

        expect(day3move.move).toBeCalledTimes(3);
      });

      it('calls move left', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              direction: 'L',
              moves: 5
            })
          ])
        );
      });

      it('calls move down', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              direction: 'D',
              moves: 6
            })
          ])
        );
      });

      it('calls move right', () => {
        expect(calls).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              direction: 'R',
              moves: 1
            })
          ])
        );
      });
    });
  });

  //bonus for performance keep intersections separate when merging
  //TODO: Test for: distance returns distance from central point
  //TODO: Test for: shortest distance returns
});
