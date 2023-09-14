// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

const doArraySum = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(doArraySum([10,100,40])); //150
console.log(doArraySum([10,100,1000,1])); //1111
console.log(doArraySum([-50,0,50,200])); //200