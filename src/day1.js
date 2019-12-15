import { day1input } from '../inputs/day1input';

export function fuelRequired(mass) {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) return 0;
  if (fuel > 6 + 2) return fuel + fuelRequired(fuel);
  return fuel;
}

export function fuelCounterUpper(modulesMasses) {
  return modulesMasses.reduce((acc, mass) => acc + fuelRequired(mass), 0);
}

export function day1() {
  console.log(fuelCounterUpper(day1input()));
}
