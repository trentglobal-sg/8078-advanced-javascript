// The ternary operator is the ?
// it's a short of form of the if else
let n =10;
if (n > 0) {
    console.log("pos");
} else {
    console.log("neg");
}

console.log( n > 0 ? "pos" : "neg");

// a shop applies a discount of 10% if the total purchase is more than 100
let totalPurchased = 120;
// let discount = 0;
// if (totalPurchased > 100) {
//     discount = 0.1;
// }
totalPurchased = totalPurchased * (1.0 - (totalPurchased > 100 ? 0.1 : 0) );