// Check if a number is a whole number
// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), 
// return true. Otherwise, return false.

const checkWholeNumber = (a) => {
    return a - Math.floor(a) === 0;

    // return Number.isInteger(a);
    // return Math.floor(a) === a;
}

console.log(checkWholeNumber(2.5));