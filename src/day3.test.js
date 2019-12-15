import {
  layWire,
  distance,
  closestDistance,
  intersectionPointClosest
} from './day3';

describe('day3', () => {
  //TODO: Maybe add '+' on corners
  describe('layWire', () => {
    //layWire merges arrays of marked cells
    it('returns merged', () => {
      const markedCells = layWire(['R1', 'L2'], 0, []);

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

  //shortest distance returns
  describe('closestDistance', () => {
    it('returns closest point', () => {
      const result = closestDistance([{ pos: [1, 1] }]);
      expect(result).toEqual(2);
    });
    it('returns nearest point', () => {
      const result = closestDistance([{ pos: [3, 2] }, { pos: [2, 2] }]);
      expect(result).toEqual(4);
    });
  });
  describe('intersectionPointClosest', () => {
    it('example 1', () => {
      const wire0 = ['R8', 'U5', 'L5', 'D3'];
      const wire1 = ['U7', 'R6', 'D4', 'L4'];

      const result = intersectionPointClosest(wire0, wire1);

      expect(result).toEqual(6);
    });
    it('example 2', () => {
      const wire0 = [
        'R75',
        'D30',
        'R83',
        'U83',
        'L12',
        'D49',
        'R71',
        'U7',
        'L72'
      ];
      const wire1 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

      const result = intersectionPointClosest(wire0, wire1);

      expect(result).toEqual(159);
    });
  });
});
