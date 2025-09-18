const prompt = require('prompt-sync')();

let numbers = [10, 20, -5, 1, 2, 7, 11];
console.log("1. Sort in ascending order");
console.log("2. Sort in descending order");
console.log("3. Sort as string");
let choice = parseInt(prompt("Enter choice: "));

function getCompareFn(choice) {
    if (choice == 1) {
        return function(a, b) {
           return a - b;
        }
    }
    if (choice == 2) {
        return function(a,b) {
            return b - a;
        }
    }
    if (choice == 3) {
        return function(a,b) {
            return (a + "") - (b + "");
        }
    }
}

let compareFn = getCompareFn(choice);
numbers.sort(compareFn);
console.log(numbers);