import { first } from 'rxjs';

export class Lessons {
  static working(): boolean {
    return true;
  }

  solutionNumberIntegersDivisible(A: number, B: number, K: number): number {
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
    if (A % K === 0 && B % K === 0 && A !== 0) {
      return numberOfDivisible + 1;
    }
    let numberToSubstract = 0;
    if (A < K) {
      numberToSubstract = K - A;
      if (A === 0) {
        numberToSubstract = numberToSubstract + 1;
      }
    }
    if (A > K) {
      const division = Math.floor(A / K);
      numberToSubstract = A - K * division;
    }
    return (
      Math.floor((K + substraction - numberToSubstract) / K) +
      (A === 0 && A % 0 !== 0 ? 1 : 0)
    );
  }

  /*
  *
  * A DNA sequence can be represented as a string consisting of the letters A, C, G and T,
  *  which correspond to the types of successive nucleotides in the sequence. Each nucleotide
  * has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors
  * of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form:
  * What is the minimal impact factor of nucleotides contained in a particular part of the given
  * DNA sequence?
  *
  * "ACGT"
  * A = 1
  * C = 2
  * G = 3
  * T = 4
  *
  * S = "S[0]S[1]S[2]S[N-1]"
  * N = Longitud "ACGT" => 4
  * S =
  * S[0] = A
  * S[1] = C
  * S[2] = G
  * S[3] = T
  *
  * M queries = M
  *
  *
  *
  * ( P[0] = 2    Q[0] = 4 )
  *         3,2,2
  *   => 2
  * ( P[1] = 5    Q[1] = 5 )
  *   => 4
  * ( P[2] = 0    Q[2] = 6 )
  *   => 1
  *
  * S = CAGCCTA
  *     2132241
  * S[0] = 2
  * S[1] = 1
  * S[2] = 3
  * S[3] = 2
  * S[4] = 2
  * S[5] = 4
  * S[6] = 1

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters.
* There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers.
* The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained
*  in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S: string, P: number[], Q: number[]): number[];

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P and Q is an integer within the range [0..N - 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
  *
  * */

  solutionDNA(S: string, P: number[], Q: number[]): number[] {
    // Implement your solution here
    const arrayDNA: number[] = [];
    let minimumPossibleValue = 5;
    for (let i = 0; i < S.length; i++) {
      //   * A = 1
      //   * C = 2
      //   * G = 3
      //   * T = 4
      switch (S[i]) {
        case 'A':
          if (1 < minimumPossibleValue) {
            minimumPossibleValue = 1;
          }
          arrayDNA.push(1);
          break;
        case 'C':
          if (2 < minimumPossibleValue) {
            minimumPossibleValue = 2;
          }
          arrayDNA.push(2);
          break;
        case 'G':
          if (3 < minimumPossibleValue) {
            minimumPossibleValue = 3;
          }
          arrayDNA.push(3);
          break;
        case 'T':
          if (4 < minimumPossibleValue) {
            minimumPossibleValue = 4;
          }
          arrayDNA.push(4);
          break;
        default:
          break;
      }
    }
    const sizePQ = P.length;
    const arrayOfresponses: number[] = [];
    for (let i = 0; i < sizePQ; i++) {
      const indexP = P[i];
      const indexQ = Q[i];
      let minimum = 5;
      for (let j = indexP; j <= indexQ; j++) {
        const currentDNAValue = arrayDNA[j];
        if (currentDNAValue < minimum) {
          minimum = currentDNAValue;
          if (currentDNAValue === minimumPossibleValue) {
            break;
          }
        }
      }
      arrayOfresponses.push(minimum);
    }
    return arrayOfresponses;
  }

  solutionDNA2(S, P, Q) {
    const results = [];
    const impact = { A: 1, C: 2, G: 3, T: 4 };
    for (let i = 0; i < P.length; i++) {
      const analyze = S.substring(P[i], Q[i] + 1);
      if (analyze.indexOf('A') !== -1) {
        results[i] = 1;
        continue;
      }
      if (analyze.indexOf('C') !== -1) {
        results[i] = 2;
        continue;
      }
      if (analyze.indexOf('G') !== -1) {
        results[i] = 3;
        continue;
      }
      results[i] = 4;
    }
    return results;
  }
  /*
  * A[n] = N (integers)
  * P[p] Q[q]
  * ( P[o] - Q[q] )
  * p<=0<Q<N => slice
  *
  *
    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
    *
    * ( P[1] , Q[2] ) = ( 2 + 2 ) / 2 = 2
    * ( P[3] , Q[4] ) = ( 5 + 1 ) / 2 = 3
    * ( P[1] , Q[4] ) = (2 +2 + 5 + 1 ) / 4 = 2.55
    * slice (1, 2), whose average is (2 + 2) / 2 = 2;
      slice (3, 4), whose average is (5 + 1) / 2 = 3;
      slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
  *
  * Average Slice
  *
  * A non-empty array A consisting of N integers is given.
  * A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A
  * (notice that the slice contains at least two elements).
  * The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q]
  *  divided by the length of the slice. To be precise, the average equals
  *  (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A: number[]): number;

that, given a non-empty array A consisting of N integers, returns the starting
* position of the slice with the minimal average. If there is more than one
* slice with a minimal average, you should return the smallest starting
* position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
    *
    * 1.5
    A[4] = 1
    A[1] = 2
    A[2] = 2
    A[0] = 4
    A[3] = 5
    A[5] = 5
    A[6] = 8
    *
    * -10000/2
    A[4] = -10000
    A[1] = -1
    A[2] = 0
    A[0] = 4
    A[3] = 5
    A[5] = 5
    A[6] = 8
    *
    *
    *
    *
    *
    *
    *
    // [-2, -1]
    // (-3) / 1 − 0 + 1
    // (-1.5)
    // [1,1,1]
    // (2) / 2 = 1
    // (3) / 3 = 1
    // [0,0]
    // (0 + 0) / 1
    // 0
    // [0,1]
    // (0 + 5) / 2
    // 1
    // [-1,0]
    // (0 - 1) / 2 = -1
    // [0, -1]
    // (-1 + 0) / 1 = -1
    // [-1, 1]
    // (Q − P + 1)
    // (1- + 1) / 2
    // 1
    *
    *
    *
* the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
  * */

  // const average = A.reduce((a, b) => a + b, 0) / A.length;
  // const sortedArray = [...A].sort((a, b) => a - b);
  // const minimumPossibleValue = (sortedArray[0] + sortedArray[1]) / 2;
  // let minimumAverageValue = average;
  // let minimumIndex = 0;
  // for (let i = 0; i < A.length - 1; i++) {
  //   // const firstValue = A[i];
  //   // const secondValue = A[i + 1];
  //   // const actualMinimum = (firstValue + secondValue) / 2;
  //   // if (actualMinimum === minimumPossibleValue) {
  //   //   minimumAverageValue = actualMinimum;
  //   //   minimumIndex = i;
  //   //   break;
  //   // }
  //   // if (actualMinimum < minimumAverageValue) {
  //   //   minimumAverageValue = actualMinimum;
  //   //   minimumIndex = i;
  //   // }
  // }

  solutionMinimumSliceInArray(A: number[]): number {
    const keysArray = Array.from(Array(A.length).keys());
    const numberOfPairs = keysArray
      .flatMap((v, i) => keysArray.slice(i + 1).map((w) => v + ' ' + w))
      .map((a) => a.split(' ').map((a) => Number(a)))
      .filter((a) => {
        const P = a[0];
        const Q = a[1];
        return 0 <= P && P < Q && Q < keysArray.length;
      });
    let minimumValue = 10001;
    let minimumIndex = 0;
    console.log('A', A);
    console.log('numberOfPairs', numberOfPairs);
    for (let i = 0; i < numberOfPairs.length; i++) {
      const firstIndex = numberOfPairs[i][0];
      const secondIndex = numberOfPairs[i][1];
      const slicedArray = A.slice(firstIndex, secondIndex + 1);
      const sum = slicedArray.reduce((a, b) => a + b, 0);
      const actualMinimum = sum / slicedArray.length;
      if (actualMinimum < minimumValue) {
        minimumValue = actualMinimum;
        minimumIndex = firstIndex;
      }
    }

    return minimumIndex;
  }

  // function MinAvgTwoSlice(A) {
  //   var start = 0;
  //
  //   var currentSum = A[0] + A[1];
  //   var minAvgSlice = currentSum / 2;
  //   for (var i=2; i<A.length; i++) {
  //     currentSum += A[i];
  //     var newAvg = currentSum / 3;
  //     if (newAvg < minAvgSlice) {
  //       minAvgSlice = newAvg;
  //       start = i-2;
  //     }
  //
  //     currentSum -= A[i-2];
  //     newAvg = currentSum / 2;
  //     if (newAvg < minAvgSlice) {
  //       minAvgSlice = newAvg;
  //       start = i-1;
  //     }
  //   }
  //
  //   return start;
  // }

  solutionDistinctValuesArray(A: number[]): number {
    // Implement your solution here
    const distinctSetValues = new Set(A);
    return distinctSetValues.size;
  }

  solutionMaximumTriplet(A: number[]): number {
    const sortedArray = A.sort((a, b) => b - a);
    let moreThanTwoNegatives = false;
    if (sortedArray.length === 3) {
      return sortedArray[0] * sortedArray[1] * sortedArray[2];
    } else {
      const lastValue = sortedArray[sortedArray.length - 1];
      const lastValueMinusOne = sortedArray[sortedArray.length - 2];
      if (lastValue < 0 && lastValueMinusOne < 0) {
        moreThanTwoNegatives = true;
      }
      if (moreThanTwoNegatives) {
        if (sortedArray[0] < 0 || sortedArray[0] === 0) {
          // only negatives or 0 and negatives
          return sortedArray[0] * sortedArray[1] * sortedArray[2];
        } else {
          if (sortedArray.length === 4) {
            return (
              sortedArray[0] *
              sortedArray[sortedArray.length - 1] *
              sortedArray[sortedArray.length - 2]
            );
          } else {
            const firstValue = sortedArray[0];
            const firstPair = sortedArray[1] * sortedArray[2];
            const secondPair =
              sortedArray[sortedArray.length - 1] *
              sortedArray[sortedArray.length - 2];
            return (
              firstValue * (firstPair > secondPair ? firstPair : secondPair)
            );
          }
        }
      } else {
        // positive and 0
        return sortedArray[0] * sortedArray[1] * sortedArray[2];
      }
    }
  }

  /*

  [0] = 10
  [1] = 2
  [2] = 5
  [3] = 1
  [4] = 8
  [5] = 20


  * An array A consisting of N integers is given.
  A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].

2A[P] + 2A[Q] + 2A[R]  > A[Q] + A[P] + A[R]



For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A: number[]): number;

that, given an array A consisting of N integers,
returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

A[3] = 1
A[1] = 2
A[2] = 5
A[4] = 8
A[0] = 10
A[5] = 20


{
  0 < 1 < 2 < 5 < 6 => OK
  0 ≤ P < Q < R < N
  2A[P] + 2A[Q] + 2A[R]  > A[P] + A[Q] + A[R]
  2(1) + 2(2) + 2(5)  >  1 + 2 + 5 => OK


  0 < 1 < 5 < 10 < 4 => NOT OK
  0 ≤ P < Q < R < N
  2A[P] + 2A[Q] + 2A[R]  > A[P] + A[Q] + A[R]
  2(1) + 2(5) + 2(10)  >  1 + 5 + 10 => OK
}






For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

  LENGTH <




  *
  * */

  solutionTriangleTriplet(A: number[]): number {
    let first = 0;
    let second = 0;
    let third = 0;
    let existAtLeastOneTriplet = 0;
    for (let i = 0; i < A.length - 2; i++) {
      first = A[i];
      for (let j = 1; j < A.length - 1; j++) {
        second = A[j];
        for (let k = 2; k < A.length; k++) {
          third = A[k];
          const firstRequirement = 0 <= i && i < j && j < k && k < A.length;
          const secondRequirement =
            first + second > third &&
            second + third > first &&
            third + first > second;
          if (firstRequirement && secondRequirement) {
            existAtLeastOneTriplet = 1;
            break;
          }
        }
        if (existAtLeastOneTriplet) {
          break;
        }
      }
      if (existAtLeastOneTriplet) {
        break;
      }
    }
    return existAtLeastOneTriplet;
  }
  solutionTriangleTriplet2(A: number[]): number {
    if (A.length < 2) return 0;
    A = A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 2; i++) {
      if (
        A[i] + A[i + 1] > A[i + 2] &&
        A[i + 1] + A[i + 2] > A[i] &&
        A[i] + A[i + 2] > A[i + 1]
      ) {
        return 1;
      }
    }
    return 0;
  }

  /*
  *
  * We draw N discs on a plane. The discs are numbered from 0 to N − 1.
  * An array A of N non-negative integers, specifying the radiuses of the discs,
  * is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs
* have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0
  *
  * There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A: number[]): number;

that, given an array A describing N discs as explained above, returns the number
* of (unordered) pairs of intersecting discs. The function should return −1 if the
* number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
* There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A: number[]): number;

that, given an array A describing N discs as explained above, returns the number
* of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
* There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A: number[]): number;

that, given an array A describing N discs as explained above, returns the number of
* (unordered) pairs of intersecting discs. The function should return −1 if the number
* of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
  *
  * */
  solutionUnorderedPairsIntersectingDiscs(A: number[]): number {
    // Implement your solution here
    let numberOfIntersection = 0;
    for (let j = 0; j < A.length; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (j !== k) {
          const centerJ = j;
          const minJ = centerJ - A[j];
          const maxJ = centerJ + A[j];
          const centerK = k;
          const minK = centerK - A[k];
          const maxK = centerK + A[k];
          const jIsMaxThanK = maxJ - centerJ > maxK - centerK;
          const jCenterIsMoreThanKCenter = centerJ > centerK;
          const arrayJ = [minJ, centerJ, maxJ];
          const arrayK = [minK, centerK, maxK];
          if (jCenterIsMoreThanKCenter ? minJ > maxK : minK > maxJ) {
            // too far
          } else {
            const hasAtLeastOneMatch = arrayJ.some((j) =>
              arrayK.some((k) => k === j),
            );
            if (hasAtLeastOneMatch) {
              numberOfIntersection++;
              break;
            }
            if (numberOfIntersection > 10000000) {
              return -1;
            }
            const createRangeArray = (min: number, max: number) => {
              const len = max - min + 1;
              const arr = new Array(len);
              for (let i = 0; i < len; i++) {
                arr[i] = min + i;
              }
              return arr;
            };
            const arrayValuesJ = createRangeArray(minJ, maxJ);
            const arrayValuesK = createRangeArray(minK, maxK);
            if (jIsMaxThanK) {
              if (minJ < minK && maxJ > maxK) {
                // J contains K
              } else {
                const haveAtLeastOne = arrayValuesJ.some((value) =>
                  arrayValuesK.includes(value),
                );
                if (haveAtLeastOne) {
                  numberOfIntersection++;
                  if (numberOfIntersection > 10000000) {
                    return -1;
                  }
                }
              }
            } else {
              if (minK < minJ && maxK > maxJ) {
                // K contains J
              } else {
                const haveAtLeastOne = arrayValuesK.some((value) =>
                  arrayValuesJ.includes(value),
                );
                if (haveAtLeastOne) {
                  numberOfIntersection++;
                  if (numberOfIntersection > 10000000) {
                    return -1;
                  }
                }
              }
            }
          }
        }
      }
    }
    return numberOfIntersection;
  }

  /*
   *  * */

  EXAMSolutionTaskOne(A: number): number {
    return A >= 0 ? 1 : 0;
  }
  /*
   *  * */

  EXAMSolutionTaskTwo(A: number): number {
    return A >= 0 ? 1 : 0;
  }
  /*
   *  * */

  EXAMSolutionTaskThree(A: number): number {
    return A >= 0 ? 1 : 0;
  }
}
