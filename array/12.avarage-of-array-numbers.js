// Return the average of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

const arrayNumbersAverage = (arr) => {
    return arr.reduce((total, num) => (total + num), 0) / arr.length;
}

console.log(arrayNumbersAverage([10,100,40])); //50
console.log(arrayNumbersAverage([10,100,1000])); //370
console.log(arrayNumbersAverage([-50,0,50,200])); //50