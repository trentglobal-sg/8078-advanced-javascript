// there are three ways to declare variables in JavaScript
// the two most common ways are `let` and `const`
let a = 300;  // let is to create a new variable
console.log(a);
a = -300;  //reassign a new value to the variable

// const is to create a variable that is constant (i.e, the value cannot not be reassigned)
// const IS not a variable which value cannot be changed

const pi = 3.14;
// pi = 3.1417;

const fruits = ["apples", "oranges", "durians"];
fruits.push("pineapples"); // --> legit
console.log(fruits);
// fruits = ["a", "b", "c"] // --> const variables cannot be used with the assignment operator

// When to use const over let
// Industry prefers to use const all the time unless it is a variable
// you will reassign to

// add up the number from 0 to 10
let sum = 0;
for (let i =0; i < 10; i++) {
   sum = sum + i;
}
console.log("sum =", sum);

// 3. var
// In short, don't use var
// var is very very strange
function example() {
  // can access x before it is defined!
  console.log(x);
  if (true) {
    var x = 5;
  }
  // can access x even if it is not in same scope!
  console.log(x); // Output: 5
}
example();
