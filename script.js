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