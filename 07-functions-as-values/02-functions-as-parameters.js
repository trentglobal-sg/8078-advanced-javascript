// 1. You can pass values to functions as parameters
// 2. Functions are values
// 3. Therefore, we can pass functions as parameters to functions
let numbers = [1, 11, 12, 3, 4, 33, 55, 100, 101, 6];
function compareFn(l,r) {
    if (l < r) {
        return -1;
    } 
    if (l > r) {
        return 1;
    }
    return 0;
}

// passing a function as a parameter to another function 
numbers.sort(compareFn);
console.log(numbers);

let fruits = ["bananas", "apples", "pineapples", "durains", "fig"];
fruits.sort(function(l,r){
    if (l.length < r.length ) {
        return -1;
    }
    if (l.length> r.length) {
        return 1;
    }
    if (l.length == r.length) {
        if (l > r) {
            return -1
        } 
        if (r < l) {
            return 1;
        }
        return 0;
    }
});
console.log(fruits);


// Example: Go through an array of numbers and extract all the numbers are negative into a new array
let n = [-1, 4, -6, 7, -10, -11, 100];
// let z = []; // z should only have negative numbers from array n
// for (let i of n) {
//     if (i < 0) {
//         z.push(i)
//     }
// }
// console.log(z);

let z = n.filter(function(eachElement){
    return eachElement < 0;
})
console.log(z);