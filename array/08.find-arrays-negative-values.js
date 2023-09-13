// Count number of negative values in array
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

const negativeValuesInArray = (arr) => {
    return arr.filter((el) => el < 0).length;
}

console.log(negativeValuesInArray([1,-2,2,-4])); //2
console.log(negativeValuesInArray([0,9,1])); //0
console.log(negativeValuesInArray([4,-3,2,1,0])); //1