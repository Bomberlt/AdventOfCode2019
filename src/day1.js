export const MSG = 'hello';

export function fuelRequired(mass) {
  return Math.round(mass / 3) - 2;
}

export function fuelCounterUpper() {
  return 0;
}
