"use strict";

// 100 Days of CODEWARS

// SUM ARRAYS
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const arrSum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return arrSum;
}

//   SUM MULTI-DIMENSION ARRAY
function arrayPlusArray(arr1, arr2) {
  const arr3 = arr1
    .concat(arr2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arr3;
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));

function sumOfTrippledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // check if for even no.
    if (array[i] % 2 === 0) {
      // multiply evens by 3
      const trippledEvenNumber = array[i] * 3;
      // add new no. to the sum
      sum += trippledEvenNumber;
    }
  }
  return sum;
}
console.log(sumOfTrippledEvens([2, 1, 5, 6, 8]));

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
});
console.log(productOfAllNums);
console.log(arr);

// for loop
const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

function getTheTitles(array) {
  const titles = [];
  for (let i = 0; i < array.length; i++) {
    titles.push(array[i].title);
  }
  return titles;
}
console.log(getTheTitles(books));

// Using .map
const book = [
  {
    title: "Book1",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
  {
    title: "Book3",
    author: "Name2",
  },
  {
    title: "Book4",
    author: "Name2",
  },
];

function getTheTitles(array) {
  return array.map((book) => book.title);
}

console.log(getTheTitles(book));

// CALCULATOR

// Add
const add = function (num1, num2) {
  return num1 + num2;
};

// Subtract
const subtract = function (num1, num2) {
  return num1 - num2;
};

// Get the sum
const sumOf = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

// Multiplication
const multiply = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

// Power
const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

// Factorial
const factorial = function (n) {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else return 1;
};
console.log(factorial(4));

// Fibonacci
const fibonacci = function (n) {
  if (n >= 3) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else return 1;
};
console.log(fibonacci(8));

// Palindromes
const palindrome = function (string) {
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(cleanedString);
  return cleanedString === cleanedString.split("").reverse().join("");
};
console.log(palindrome("nurses run"));

// Find The Oldest
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);
    return oldestAge > currentAge ? oldest : currentPerson;
  });
};

function getAge(person) {
  if (!person.yearOfDeath) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  } else return person.yearOfDeath - person.yearOfBirth;
}
console.log(findTheOldest(people));
