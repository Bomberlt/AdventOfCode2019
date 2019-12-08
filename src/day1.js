export function fuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}

export function fuelCounterUpper(modulesMasses) {
  if (modulesMasses.length == 1 && modulesMasses[0] == 0) return 0;
  return modulesMasses.reduce((acc, mass) => acc + fuelRequired(mass), 0);
}
