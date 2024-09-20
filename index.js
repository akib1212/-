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
// let evenNumber = [];
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
let arr = [551, 22, 3, 14, 5.7, 6, 7, 8, 9, 228, 127.5,111];

function sortArrayDescending(randomArray) {
  let descendingArray = [];
  function compare(a, b) {
    return a - b;
  }
  descendingArray = randomArray.sort(compare);
  return descendingArray;
}
console.log(sortArrayDescending(arr));
