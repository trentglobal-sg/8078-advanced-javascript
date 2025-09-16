let person = {
    "email":"abc@def.com",
    "account_age": 32,
    "account_type":"VIP"
}

// New feature for our website
// either you are VIP account, or your account age is 365

function checkAccountIsVIP(person) {
    return person.account_type == "VIP"
}

function checkAccountIsAtLeastOneYear(person) {
    return person.account_age >= 365
}

console.log( checkAccountIsVIP(person) || checkAccountIsAtLeastOneYear(person));