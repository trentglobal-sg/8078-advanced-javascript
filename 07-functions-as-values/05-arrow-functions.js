// ARROW FUNCTIONS
// 1. Short form for annyomous functions
// 2. It is lexcial scope

// const compareFn = function(a,b) {
//     return a -b;
// }

// 1. remove the word `function` and put `=>` between the parameters and the curly braces
// const compareFn = (a,b) => {
//     return a - b;
// }

// 2. You can remove the braces and the return if your arrow function has only one line
const compareFn = (a,b) => a - b;

// 3. If you have one parameter exactly you can remove the parenthesis around the parameter
const calculateAreaOfCircle = radius => 22/7 * radius ** 2;

let number = [77, 11, 122, 33, -5];
number.sort((a,b) =>  a -b);