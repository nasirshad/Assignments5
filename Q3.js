"use strict";
function removeEvenNumbers(numbers) {
    // Use the filter method to create a new array with only odd numbers
    var oddNumbers = numbers.filter((number) => number % 2 !== 0);
    return oddNumbers;
}
// Example usage:
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var oddNumbersArray = removeEvenNumbers(numberArray);
console.log("Array with even numbers removed:");
console.log(oddNumbersArray);
