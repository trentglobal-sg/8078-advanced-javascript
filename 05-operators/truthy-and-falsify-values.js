// Truthy Values and Falsify Values
console.log( true || true);
console.log( true && true);

// JavaScript:
console.log(`2 || 3 =>`, 2 || 3); // because of logical OR circuit, 2 || 3 will take the first value, which is 2
console.log(`4 && "abc" => `, 4 && "abc"); // beecause of logical AND and how it works, which is 'abc'

// Truthy Values are ANY VALUES besides the following: 0, null, NaN, undefined, ""
// Falsy Values are: 0, null, NaN, undefined, "" ==> in logical operators and if/else, they are considered as false

console.log(NaN && 2);
console.log("" || "abc");