const prompt = require('prompt-sync')();

// AND short circuit
// happens when one of the operands is false
// JavaScript will just evaluate the entire expression as false immediately
let x = 10;
let y = 20;
console.log(x < 10 && y >= 20);

let fruits =["apples", "oranges", "bananas", "pear"]
let n = prompt("Which fruit to search for: ");
let result = null;
for (let f of fruits) {
    if (f==n) {
        result = f;
        break;
    }
}
// if a fruit is found, we want to print out the fruit if its length is more than 5 characters
if ( result != null && result.length > 5) {
    console.log(result);
} else {
    console.log("Fruit found but is too short")
}

