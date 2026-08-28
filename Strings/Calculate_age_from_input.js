const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pattern = /^\d{4}-\d{2}-\d{2}$/;
let currentDate = "2026-08-27";
let todayParts = currentDate.split("-");

let currentYear = Number(todayParts[0]);
let currentMonth = Number(todayParts[1]);
let currentDay = Number(todayParts[2]);

let userYear;
let userMonth;
let userDay;

function isValidDate(dateText) {
    if (!pattern.test(dateText)) {
        return false;
    }

    let parts = dateText.split("-");
    let year = Number(parts[0]);
    let month = Number(parts[1]);
    let day = Number(parts[2]);

    return month >= 1 && month <= 12 &&
        day >= 1 && day <= 31;
}

function askDOB() {
    rl.question("Enter your DOB (YYYY-MM-DD): ", (dob) => {
        let dobParts = dob.split("-");
        userYear = Number(dobParts[0]);
        userMonth = Number(dobParts[1]);
        userDay = Number(dobParts[2]);

        if (!isValidDate(dob)) {
            console.log("Invalid date. Enter a real date in YYYY-MM-DD format.");
            askDOB();
        } else if (dob > currentDate) {
            console.log("Date of birth cannot be in the future.");
            askDOB();
        } else {
            console.log("Valid DOB");
            calculateAge();
            rl.close();
        }
    });
}
let age;
function calculateAge() {
    age = currentYear - userYear
    if (userMonth > currentMonth) {
        age--
    } else if (userMonth == currentMonth && userDay > currentDay) {
        age--
    }
    console.log(`Your age is : ${age} years`)
    let result = [];

    for (let number = 2; number <= 1000; number++) {
        let prime = true;
        for (let otherNumber = 2; otherNumber < number; otherNumber++) {
            if (number % otherNumber === 0) {
                prime = false;
                break;
            }
        }
        if (prime && age > 0 && number % age === 0) {
            result.push(number);
        }
    }

    console.log("Prime numbers divisible by your age:", result);
}

askDOB();
