import { fuelRequired, fuelCounterUpper } from './day1';

describe('day1', () => {
  describe('fuelRequired', () => {
    it.each`
      mass      | fuel
      ${12}     | ${2}
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
    });
  });
});
