import { possibleNextDigit, pairsIndexes, guessCombinations } from './day4';

describe('day4', () => {
  //6 digit
  //in range of 273025 - 767253
  //must be at least one pair
  //increasing
  describe('possibleNextDigit', () => {
    it.each`
      lastDigit
      ${2}
      ${3}
      ${4}
      ${5}
      ${6}
      ${7}
      ${8}
      ${9}
    `('should never decrease', ({ lastDigit }) => {
      const result = possibleNextDigit(lastDigit);

      result.forEach(possibleDigit => {
        expect(possibleDigit).toBeGreaterThanOrEqual(lastDigit);
      });
    });

    describe('possibleNextDigit', () => {
      describe('should return as many as possible variants', () => {
        it.each`
          lastDigit
          ${2}
          ${3}
          ${4}
          ${5}
          ${6}
          ${7}
          ${8}
          ${9}
        `('when $lastDigit', ({ lastDigit }) => {
          const result = possibleNextDigit(lastDigit);

          expect(result.length).toEqual(10 - lastDigit);
        });
      });

      describe('all variants should be different', () => {
        it.each`
          lastDigit
          ${2}
          ${3}
          ${4}
          ${5}
          ${6}
          ${7}
          ${8}
          ${9}
        `('when $lastDigit', ({ lastDigit }) => {
          const result = possibleNextDigit(lastDigit);

          const unique = result.filter((v, i, a) => a.indexOf(v) === i);
          expect(unique.length).toEqual(result.length);
        });
      });

      describe('when pair is 0, current digit index is 1', () => {
        it.each`
          lastDigit
          ${2}
          ${3}
          ${4}
          ${5}
          ${6}
          ${7}
          ${8}
          ${9}
        `('should stay the same as lastDigit ($lastDigit)', ({ lastDigit }) => {
          const pairIndex = 0;
          const currentIndex = 1;
          const result = possibleNextDigit(lastDigit, pairIndex, currentIndex);

          expect(result[0]).toEqual(lastDigit);
        });
      });
    });
  });

  describe('pairsIndexes', () => {
    const result = pairsIndexes();
    expect(result).toBe(31);
    expect(result.length).toBe(31);
  });

  describe.only('guessCombination', () => {
    it('should be only one when min is 999990', () => {
      const min = 999990;
      const max = 999999;
      const result = guessCombinations(min, max);
      expect(result.length).toBe(1);
    });
    it('should be only two when min is 899990', () => {
      const min = 899990;
      const max = 999999;
      const result = guessCombinations(min, max);
      expect(result.length).toBe(2);
    });
    it('should be only three when min is 889990', () => {
      const min = 889990;
      const max = 999999;
      const result = guessCombinations(min, max);
      expect(result.length).toBe(3);
    });

    it('should result day4', () => {
      const min = 273025;
      const max = 767253;
      const result = guessCombinations(min, max);
      expect(result.length).toBe(1);
    });
  });
});
