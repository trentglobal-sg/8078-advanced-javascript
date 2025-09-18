foobar();
// x(); // => cannot call the anyomous function inside variable x because it haven't been defined yet

// anoymous functions in JavaScript are functions with no name
// but because we still need to refer it somehow, we can store them in variables
// anoymous functions are NOT hoisted
let x = function() {
    console.log("x has been called");
};  // this creates a anoymous function and stores it in the variable x

x();

// functions are hoisted in JavaScript
// in other words, when JavaScript runs a .js file, it will in memory put all the function definitions 
function foobar() {
    console.log("foobar");
}