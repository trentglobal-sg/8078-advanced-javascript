const rhyme = "She sells seashells at the seashore";
const words = 'Jack and Jill went up the hill';

// escaped characters in String (aka escape sequence)
console.log("Dear sir\nYour bill is due");
console.log('She said, "I don\'t know what is going on!"');  

// there is backtick string in JavaScript
// eqv. formatted strings in JavaScript
const bill = 100;

function whatIf(bill) {
    if (bill >= 100) {
        return "large amount"
    } else {
        return "small amount"
    }
}

console.log(`Dear sir, your bill of ${bill} dollars is due`)
console.log(`This is a ${whatIf(bill)} amount of money`)

// Strings slicing
console.log("my_budget.xlsx".slice(-4));
console.log("apples and pears".slice(0, 10)); // slice from index 0 to index 9
console.log("appels and durians".slice(5)); // slice from index 5 to the end

// we can iterate through a string and extract its character one by one
const holiday = "Christmas";
for (let h of holiday) {
    console.log(h.toUpperCase());
}

for (let i = 0; i < holiday.length; i++) {
    console.log(holiday[i]);
}