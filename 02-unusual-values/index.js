// 1. undefined
let number = 0;
let secret;  // no value is assigned
console.log(secret);

// in other programming langagues
console.log(secret + 2);

// 2. Not a Number (NaN)
// Any time an expression with arthimetric operator results in an invalid number
// you get a NaN
console.log("three"/ 3);
console.log("three" / 3 + 2);

// so if any of the variables below is NaN, the entire expression is NaN
// console.log ( a + b + c + d)

// 3. null
// null is the same as undefined = no value
// null is always assigned by the programmer
let password = null;

// null + 3 => NaN

// 4. 
console.log(3/0);
console.log(3/0 + 3)


// When to use null
let numbers = [-10, -20, 3, 10, 15, 250, 30];
// find the largest number in the array
let largest = null;
for (let n of numbers) {
    if (largest == null) {
        largest = n;
    } else {
        if (n > largest) {
            largest = n;
        }
    }
}
console.log("Largest number is", largest);