// implement the functions to pass as many of the tests in js-challenges.test.js as you can

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

// // these are much much harder - it's a huge stretch goal, don't worry about getting these done.
export function isPalindrome(word) {
  for (let i = 0; i <= word.length; i--) {
    let betterString = str.replace(/[\W]/g, "").toLowerCase();
    let reversedString = betterString.split().reverse().join();
    return (betterString = reversedString);
  }
}

// export function isAnagram() {
//   // implement function
// }

// export function countLetters() {
//   // implement function
// }
