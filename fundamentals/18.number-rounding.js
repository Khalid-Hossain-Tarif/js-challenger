// Round a number to 2 decimal places
// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. 
// Return the rounded number

const roundNumber = (a) => {
    return Number(a.toFixed(2));
}

console.log(roundNumber(26.1379));