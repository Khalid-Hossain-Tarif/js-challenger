// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a

const percentageOfNumber = (a, b) => {
    // return a * b / 100;
    return b / 100 * a;
}

console.log(percentageOfNumber(500, 25));