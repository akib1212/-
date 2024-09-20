//1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(a, b) {
  return Math.abs(a - b);
}
console.log(calculateDifference(-8, 2));

//2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(7));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
let minArray = [551, 22, 3, 14, 5.7, 6, 7, 8, 9, 228, 127.5];
function findMin(minArray) {
  function compare(a, b) {
    return a - b;
  }
  let minNumber = minArray.sort(compare)[0];
  return minNumber;
}
console.log(findMin(minArray));

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
let arrEven = [551, 22, 3, 14, 5.7, 6, 7, 8, 9, 228, 127.5];

function filterEvenNumbers(arr) {
  let newArray = [];
  arr.map((x) => {
    if (x % 2 == 0) {
      newArray.push(x);
    }
  });
  return newArray;
}
console.log(filterEvenNumbers(arrEven));

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
let arr = [551, 22, 3, 14, 5.7, 6, 7, 8, 9, 228, 127.5, 111];

function sortArrayDescending(randomArray) {
  let descendingArray = [];
  function compare(a, b) {
    return b - a;
  }
  descendingArray = randomArray.sort(compare);
  return descendingArray;
}
console.log(sortArrayDescending(arr));


// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
let string = "Akib Mahamud";

function lowercaseFirstLetter(string) {
  let newString = string.charAt(0).toLowerCase() + string.slice(1);
  return newString;
}
console.log(lowercaseFirstLetter(string));

// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
let newString = "We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we are building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging."

function countVowels(string) {
  let vowels = 'aeiouAEIOU';
  let vowelsNumber = string.split('').filter(char => vowels.includes(char)).length;
  return vowelsNumber;
}
console.log(countVowels(newString));

// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
let arrayAverage = [10, 20, 30, 0, 22, 35, 78, 96, 57, 15]
function findAverage(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let average = sum / arr.length;
  return average;
}
console.log(findAverage(arrayAverage));
