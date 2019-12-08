import { fuelRequired, fuelCounterUpper } from './day1';
import { day1input, oneModule } from '../inputs/day1input';

describe('day1', () => {
  describe('fuelRequired', () => {
    it.each`
      mass      | fuel
      ${0}      | ${0}
      ${12}     | ${2}
      ${14}     | ${2}
      ${1969}   | ${654}
      ${100756} | ${33583}
    `('for mass of $mass fuel returns $fuel', ({ mass, fuel }) => {
      const result = fuelRequired(mass);

      expect(result).toBe(fuel);
    });
  });
  describe('fuelCounterUpper', () => {
    describe('when masses of modules are', () => {
      it('0 should return 0', () => {
        const massesOfModules = [0];

        const result = fuelCounterUpper(massesOfModules);

        expect(result).toBe(0);
      });

      it('12 should return 2', () => {
        const massesOfModules = [12];

        const result = fuelCounterUpper(massesOfModules);

        expect(result).toBe(2);
      });

      it('12, 14 should return 4', () => {
        const massesOfModules = [12, 14];

        const result = fuelCounterUpper(massesOfModules);

        expect(result).toBe(4);
      });

      it('12, 14,  should return 658', () => {
        const massesOfModules = [12, 14, 1969];

        const result = fuelCounterUpper(massesOfModules);

        expect(result).toBe(654 + 4);
      });
    });
  });
});
