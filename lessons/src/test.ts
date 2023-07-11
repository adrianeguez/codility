// BinaryGap

function solutionBinaryGap(N: number): number {
  // Implement your solution here
  if (N < 0) {
    throw new Error('Not a positive integer');
  }
  if (N % 1 !== 0) {
    throw new Error('Not an integer');
  }
  const binaryNumber = createBinaryNumber(N);
  return findBinaryGap(binaryNumber);
}

function createBinaryNumber(N: number): string {
  return N.toString(2);
}

function findBinaryGap(binaryNumber: string): number {
  const numberOneOcurrences: number[] = findOcurrencesInAString(
    binaryNumber,
    '1',
  );
  if (numberOneOcurrences.length === 0 || numberOneOcurrences.length === 1) {
    return 0;
  }
  let binaryMaxGabNumber = 0;
  numberOneOcurrences.forEach((item, index) => {
    const nextItem = numberOneOcurrences[index + 1];
    if (nextItem) {
      const binaryGab =
        numberOneOcurrences[index + 1] - numberOneOcurrences[index] - 1;
      if (binaryGab >= binaryMaxGabNumber) {
        binaryMaxGabNumber = binaryGab;
      }
    }
  });
  return binaryMaxGabNumber;
}

function findOcurrencesInAString(
  inputString: string,
  charToFind: string,
): number[] {
  const charInTheString = [
    ...inputString.matchAll(new RegExp(charToFind, 'gi')),
  ].map((f) => f.index);
  if (charInTheString) {
    return charInTheString as number[];
  }
  return [];
}

// Array Rotation

function solutionArrayRotation(A: number[], K: number): number[] {
  // Implement your solution here
  const numberOfRotations = K;
  const numberArray = A;
  const numberOfElements = numberArray.length;
  const halfOfElements = Math.round(numberOfElements / 2);
  if (numberOfRotations <= numberOfElements) {
    return rotate(A, K);
  }
  if (numberOfRotations > numberOfElements) {
    const moduleRotationElements = numberOfRotations % numberOfElements;
    if (moduleRotationElements === 0) {
      return numberArray;
    }
    return rotate(A, moduleRotationElements);
  }
  return [];
}
function rotate(A: number[], K: number): number[] {
  const copyArray = [...A];
  const arrayLength = A.length;
  const emptyArray = new Array(arrayLength).fill(0);
  return emptyArray.map((element, index) => {
    if (index < K) {
      return copyArray[index - K + arrayLength];
    } else {
      return copyArray[index - K];
    }
  });
}

// Odd number in array

function solutionOddNumberArray(A: number[]): number {
  // Implement your solution here
  return numberOfOccurencesInArray(A);
}
function numberOfOccurencesInArray(numberArray: number[]): number {
  const set: Set<number> = new Set([]);

  for (const item of numberArray) {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  }
  return Array.from(set)[0];
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionFrogJump(X: number, Y: number, D: number): number {
  // Implement your solution here
  const newNumber = Y - X;
  if (newNumber === 0) {
    return 0;
  }
  return Math.ceil(newNumber / D);
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionMissingNumberArray(A: number[]): number {
  // Implement your solution here
  const sortedArray = A.sort((a, b) => a - b);
  if (A.length === 0) {
    return 1;
  }
  const minorNumber = sortedArray[0];
  if (minorNumber !== 1 && A.length > 1) {
    return 1;
  }
  if (A.length === 1) {
    if (A[0] === 2) {
      return 1;
    } else {
      return 2;
    }
  }
  let number = 0;
  console.log(sortedArray);
  for (const index in sortedArray) {
    const numberIndex = Number(index);
    if (sortedArray[numberIndex + 1]) {
      if (sortedArray[numberIndex + 1] !== sortedArray[numberIndex] + 1) {
        number = sortedArray[numberIndex] + 1;
        break;
      }
    }
    if (numberIndex + 1 === sortedArray.length) {
      number = sortedArray[numberIndex] + 1;
      break;
    }
  }
  return number;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionTapeEquilibrium(A: number[]): number {
  // Implement your solution here
  if (A.length === 0) {
    return 0;
  }
  if (A.length === 2) {
    return Math.abs(A[0] - A[1]);
  }
  let lowestNumber = 0;
  let firstPart = 0;

  const totalSum = A.reduce((a, b) => a + b, 0);
  for (let i = 0; i < A.length - 1; i++) {
    firstPart = firstPart + A[i];
    const secondPart = totalSum - firstPart;
    const difference = Math.abs(firstPart - secondPart);
    if (i === 0) {
      lowestNumber = difference;
    }
    if (difference < lowestNumber) {
      lowestNumber = difference;
    }
  }
  return lowestNumber;
}

function solutionFrogTimeJump(X: number, A: number[]): number {
  // Implement your solution here

  const maxValue = X;
  const leavesSet = new Set();
  let currentTime = 0;
  for (let i = 0; i < A.length; i++) {
    const actualValue = A[i];
    if (actualValue <= maxValue) {
      leavesSet.add(actualValue);
    }
    currentTime = i;
    if (leavesSet.size === maxValue) {
      break;
    }
  }
  if (leavesSet.size !== maxValue) {
    return -1;
  }
  return currentTime;
}

function solutionPermutation(A: number[]): number {
  // Implement your solution here
  const permutation = new Set();
  let isRepeated = false;
  let maxValue = 0;
  for (let i = 0; i < A.length; i++) {
    const actualValue = A[i];
    if (actualValue >= maxValue) {
      maxValue = actualValue;
    }
    if (permutation.has(actualValue)) {
      isRepeated = true;
      break;
    }
    permutation.add(actualValue);
  }
  if (isRepeated) {
    return 0;
  }
  if (maxValue === permutation.size) {
    return 1;
  } else {
    return 0;
  }
}

function solutionMaxCounters(N: number, A: number[]): number[] {
  // Implement your solution here
  const arrayCounter = new Array(N).fill(0);

  let maxValue = 0;
  let maxValueForAll = 0;
  for (let i = 0; i < A.length; i++) {
    const actualValueK = A[i];
    const actualValueInArrayCounter = arrayCounter[actualValueK - 1];
    const isIncreaseCase = 1 <= actualValueK && actualValueK <= N;
    if (isIncreaseCase) {
      if (actualValueInArrayCounter < maxValueForAll) {
        arrayCounter[actualValueK - 1] = maxValueForAll + 1;
      } else {
        arrayCounter[actualValueK - 1] = arrayCounter[actualValueK - 1] + 1;
      }
      if (arrayCounter[actualValueK - 1] > maxValue) {
        maxValue = arrayCounter[actualValueK - 1];
      }
    }
    const isMaxCounterCase = actualValueK === N + 1;
    if (isMaxCounterCase) {
      maxValueForAll = maxValue;
    }
  }
  for (let i = 0; i < arrayCounter.length; i++) {
    const value = arrayCounter[i];
    if (value < maxValueForAll) {
      arrayCounter[i] = maxValueForAll;
    }
  }

  return arrayCounter;
}

function solutionMinMissingNumber(A: number[]): number {
  // Implement your solution here
  const setArray = new Set(A);
  let min = 1;
  for (let i = 1; i < 10000000; i++) {
    if (!setArray.has(i)) {
      min = i;
      break;
    }
  }
  return min;
}

function solutionPassinCarsA(A: number[]): number {
  // Implement your solution here
  const N = A.length;
  const arrayEast = [];
  const arrayWest = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      arrayEast.push(i);
    } else {
      arrayWest.push(i);
    }
  }
  let pairs = 0;
  for (let i = 0; i < arrayEast.length; i++) {
    for (let j = 0; j < arrayWest.length; j++) {
      const P = arrayEast[i];
      const Q = arrayWest[j];
      const isPassing = 0 <= P && P < Q && Q < N;
      if (isPassing) {
        pairs = pairs + 1;
        if (pairs > 1000000000) {
          break;
        }
      }
    }
    if (pairs > 1000000000) {
      break;
    }
  }
  if (pairs > 1000000000) {
    return -1;
  }
  return pairs;
}

function solutionPassinCarsB(A: number[]): number {
  // Implement your solution here
  let N = A.length;

  let countOne = 0,
    result = 0;
  while (N >= 1) {
    if (A[N - 1] == 1) countOne++;
    else result += countOne;
    N--;

    if (result > 1000000000) {
      break;
    }
  }

  if (result > 1000000000) {
    return -1;
  }
  return result;
}

function solution(A: number, B: number, K: number): number {
  // Implement your solution here
  console.log('A', A);
  console.log('B', B);
  console.log('K', K);
  if (B === 0) {
    return 1;
  }
  if (A === B) {
    if (A === K) {
      return 1;
    }
    return A % K === 0 ? 1 : 0;
  }
  if (B === 1 && K === 1) {
    if (A === 0) {
      return 2;
    }
    return 1;
  }
  const substraction = B - A;
  if (K === 1) {
    return substraction + 1;
  }

  const numberOfDivisible = Math.floor(substraction / K);
  if (A % K === 0 && B % K === 0) {
    return numberOfDivisible + 1;
  }
  if (A % K === 0) {
    if (A !== 0) {
      return numberOfDivisible + 1;
    } else {
      return numberOfDivisible;
    }
  }
  let numberToSubstract = 0;
  if (A < K) {
    numberToSubstract = K - A;
  }
  if (A > K) {
    const division = Math.floor(A / K);
    numberToSubstract = A - K * division;
  }
  return Math.floor((K + substraction - numberToSubstract) / K);
}
