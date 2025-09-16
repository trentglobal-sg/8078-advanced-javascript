const prompt = require('prompt-sync')()

let salulation = prompt("Enter your salulation (default to Mr.) :") || "Mr.";
// if (!salulation) {
//     salulation = "Mr."
// }

const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name (optional): ");

console.log("Salulation:", salulation);
console.log("First Name: ", firstName);
console.log("Last Name:", lastName || "N/A")

// Because if the user enters a last name, for example, "Smith", then is truthy
// But if it is an empty string, then it is falsy
// if (lastName) {
//     console.log("Last Name: ", lastName);
// }
