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
  