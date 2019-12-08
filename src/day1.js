import { day1input } from '../inputs/day1input';

export function fuelRequired(mass) {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) return 0;
  return fuel;
}

export function fuelCounterUpper(modulesMasses) {
  return modulesMasses.reduce((acc, mass) => acc + fuelRequired(mass), 0);
}

export function fuelCounterUpperDay1() {
  return fuelCounterUpper(day1input());
}

console.log(fuelCounterUpperDay1());
