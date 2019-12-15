import { layWire, distance } from './day3';

describe('day3', () => {
  //TODO: Maybe add '+' on corners
  describe('layWire', () => {
    //layWire merges arrays of marked cells
    it('returns merged', () => {
      const markedCells = layWire(['R1', 'L2'], 0);

      expect(markedCells).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            pos: [1, 0]
          })
        ])
      );

      expect(markedCells).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            pos: [0, 0]
          })
        ])
      );

      expect(markedCells).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            pos: [-1, 0]
          })
        ])
      );
    });
  });

  //bonus for performance keep intersections separate when merging
  // distance returns distance from central point
  describe('distance', () => {
    it.each`
      x     | y     | expectedResult
      ${1}  | ${1}  | ${2}
      ${1}  | ${2}  | ${3}
      ${-1} | ${2}  | ${3}
      ${-1} | ${-2} | ${3}
    `(
      '[$x , $y ] distance to be $expectedResult ',
      ({ x, y, expectedResult }) => {
        const result = distance([x, y]);

        expect(result).toEqual(expectedResult);
      }
    );
  });

  //TODO: Test for: shortest distance returns
});
