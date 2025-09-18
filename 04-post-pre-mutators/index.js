let a = 10;
++a;  // => a = a + 1 (preincrement)
console.log(a);
a++; // => a = a + 1 (postincrement)
console.log(a);

let b = 100;
console.log("b++ =>", b++);  // after line 8, increase b by 1
console.log("after b++ =>", b);

let c = 100;
console.log("++c =>", ++c); // the c is increased by 1 BEFORE line 12

// not recommended
console.log (a++ + ++b - c--);

// there's an optimization  for `for` loops
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// the for loop using pre-increment runs faster
for (let j = 0; j < 10; ++j) {
    console.log(j);
}