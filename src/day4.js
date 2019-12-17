export function day4() {
  const min = 273025;
  const max = 767253;
  const result = guessCombinations(min, max);
  console.log(`day4 result = ${result.length}`);
}

export function day4part2() {
  const min = 273025;
  const max = 767253;
  const result1 = guessCombinations(min, max, false);
  console.log(`day4 part2 result = ${result1.length}`);
}

export function guessCombinations(min, max, allowNearbyPairs = true) {
  const minString = min.toString();
  const minFirstDigit = parseInt(minString[0]);
  const firstDigits = new Array(10 - minFirstDigit)
    .fill(9)
    .map((val, i) => val - i);

  let combinations = [];
  console.log('allowNearbyPairs');
  console.log(allowNearbyPairs);
  const pairIndexes = pairsIndexes(allowNearbyPairs);
  console.log('pairIndexes');
  console.log(pairIndexes);
  pairIndexes.forEach(pairIndex => {
    firstDigits.forEach(firstDigit => {
      let secondDigits = possibleNextDigit(firstDigit, pairIndex, 1);
      secondDigits.forEach(secondDigit => {
        let thirdDigits = possibleNextDigit(secondDigit, pairIndex, 2);
        thirdDigits.forEach(thirdDigit => {
          let fourthDigits = possibleNextDigit(thirdDigit, pairIndex, 3);
          fourthDigits.forEach(fourthDigit => {
            let fifthDigits = possibleNextDigit(fourthDigit, pairIndex, 4);
            fifthDigits.forEach(fiftDigit => {
              let sixthDigits = possibleNextDigit(fiftDigit, pairIndex, 5);
              sixthDigits.forEach(sixthDigit => {
                const combination =
                  sixthDigit +
                  fiftDigit * 10 +
                  fourthDigit * 100 +
                  thirdDigit * 1000 +
                  secondDigit * 10000 +
                  firstDigit * 100000;
                if (combination >= min && combination <= max) {
                  if (!combinations.includes(combination)) {
                    combinations.push(combination);
                  }
                }
              });
            });
          });
        });
      });
    });
  });
  const smallest = combinations.reduce(
    (min, val) => (val < min ? val : min),
    combinations[0]
  );
  const biggest = combinations.reduce(
    (min, val) => (val > min ? val : min),
    combinations[0]
  );

  return combinations.filter((v, i, a) => a.indexOf(v) === i);
}

export function pairsIndexes(allowNearby = true) {
  let variants = [];
  // For every digit
  for (let i = 0; i < 5; i++) {
    // One pair
    variants.push([i]);
    // Two pairs j = i+1 - 5, i<5
    variants = variants.concat(twoPairVariants(i, allowNearby));
    // Three pairs j = i-5
    variants = variants.concat(threePairVariants(i, allowNearby));
    // Four pairs
    variants = variants.concat(fourPairVariants(i, allowNearby));
  }
  // Five pairs
  if (allowNearby) {
    variants.push([0, 1, 2, 3, 4]);
  }
  return variants;
}

function twoPairVariants(i, allowNearby = true) {
  let variants = [];
  const startPairIndex = allowNearby ? i + 1 : i + 2;
  if (i < 4) {
    for (let j = startPairIndex; j < 5; j++) {
      // Second pair j
      variants.push([i, j]);
    }
  }
  return variants;
}

function threePairVariants(i, allowNearby = true) {
  const variants = [];
  const startPairIndex = allowNearby ? i + 1 : i + 2;
  if (i < 3) {
    for (let j = startPairIndex; j < 5; j++) {
      // Second pair j
      // Third pair k = j - 5
      const secondStartPairIndex = allowNearby ? j + 1 : j + 2;
      for (let k = secondStartPairIndex; k < 5; k++) {
        variants.push([i, j, k]);
      }
    }
  }
  return variants;
}

function fourPairVariants(i, allowNearby = true) {
  const variants = [];
  const startPairIndex = allowNearby ? i + 1 : i + 2;
  if (i < 2) {
    for (let j = startPairIndex; j < 5; j++) {
      // Second pair j
      // Third pair k = j - 5
      const secondStartPairIndex = allowNearby ? j + 1 : j + 2;
      for (let k = secondStartPairIndex; k < 5; k++) {
        // Third pair k
        // Fourth pair l = k - 5
        for (let l = k + 1; l < 5; l++) {
          // Fourth pair l
          variants.push([i, j, k, l]);
        }
      }
    }
  }
  return variants;
}

export function possibleNextDigit(lastDigit, pairIndexes = [0], currentIndex) {
  if (pairIndexes.some(pairIndex => pairIndex == currentIndex - 1))
    return [lastDigit];
  const arr = new Array(10 - lastDigit).fill(9);
  return arr.map((val, i) => val - i);
}

export function isCombinationLegit(combination, min, max) {
  // Six digit
  if (combination.toString().length !== 6) {
    return false;
  }

  // Within range
  if (combination < min || combination > max) {
    console.log(`out of range from (${min}, ${max}): ${combination}`);
    return false;
  }

  // At least one pair
  const combinationString = combination.toString().split('');
  if (
    !combinationString.some(
      digit => combinationString.filter(x => x == digit).length >= 2
    )
  ) {
    console.log(`no pairs in combination ${combination}`);
    return false;
  }

  // Never decrease
  if (
    combinationString.some((digit, i) =>
      i == 0 ? false : digit < combinationString[i - 1]
    )
  ) {
    console.log(`digits decrease with combination ${combination}`);
    return false;
  }
}
