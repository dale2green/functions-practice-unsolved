// In this exercise you'll complete a series of "comparison" mini exercises.
// Conditional logic is a huge part of coding. It's what helps a program make decisions.
// Finish each exercise below.
// You can use ANY type of function syntax you want: named, arrow, or expression with anonymous function.

/** =========================
 * Create a getDiffTwentySeven(num) function to return the difference between a given number and 27
 * If the number is greater than 27 return double the absolute difference.
 * Example1: getDiffTwentySeven(13) => 14
 * Example2: getDiffTwentySeven(37) => 20
 */

// Your code goes here...

function getDiffTwentySeven(num) {
  if (num > 27) {
    var diff = num - 27;
    return diff * 2;
  } else {
    return 27 - num;
  }
}
console.log(getDiffTwentySeven(13));
console.log(getDiffTwentySeven(37));

/** =========================
 * Create a sumOfTwoIntegers(num1, num2) function to compute and return the sum of the two given integers
 * If the two argumants are same, then returns triple their sum.
 * Example1: sumOfTwoIntegers(13, 14) => 27
 * Example2: sumOfTwoIntegers(12, 12) => 72
 */

// Your code goes here
var sumOfTwoIntegers = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log(sumOfTwoIntegers(13, 14));
console.log(sumOfTwoIntegers(12, 12));

/** =========================
 * Create a isOneOfThemOrTheirSumIsFourty(num1, num2) function to check two given numbers and return a boolean.
 * IF one of the number is 40 OR if their sum is 40 return true
 * Otherwise, return false
 * Example1: isOneOfThemOrTheirSumIsFourty(40, 13) => true
 * Example2: isOneOfThemOrTheirSumIsFourty(22, 18) => true
 * Example3: isOneOfThemOrTheirSumIsFourty(23, 16) => false
 */

// Your code goes here...
var isOneOfThemOrTheirSumIsFourty = function (num1, num2) {
  if (num1 === 40 || num2 === 40 || num1 + num2 === 40) {
    return true;
  } else {
    return false;
  }
};

console.log(isOneOfThemOrTheirSumIsFourty(40, 13));
console.log(isOneOfThemOrTheirSumIsFourty(22, 18));
console.log(isOneOfThemOrTheirSumIsFourty(23, 16));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// Do not delete or change the lines beneath
const f = {
  getDiffTwentySeven: getDiffTwentySeven || undefined,
  sumOfTwoIntegers: sumOfTwoIntegers || undefined,
  isOneOfThemOrTheirSumIsFourty: isOneOfThemOrTheirSumIsFourty || undefined,
};
export { f };
