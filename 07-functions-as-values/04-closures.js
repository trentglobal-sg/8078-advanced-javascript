// a and b are two different annoymous function values even though they do the same thing
let a = function() {
    console.log("foobar");
};

let b = function(){
    console.log("foobar");
}

let funcs = [];
for (let i = 0; i < 10; i++) {
    // a closure is a anyomous function that refers to a local variable outside of itself
    funcs.push(function(){
        console.log(i);  // when a function value is created, any local variables outside of itself
                         // will have its value "frozen"
    })
}

funcs[0]();
console.dir(funcs[3]);

let fruits = ["apples", "bananas", "cherries", "durians"];
let wordFunc = [];
for (let f of fruits) {
    wordFunc.push(function(){
        console.log(f.toUpperCase());
    })
}

wordFunc[2]();