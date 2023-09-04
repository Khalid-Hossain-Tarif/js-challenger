// Extract first half of string
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

//using slice
const findFirstHalfString = (a) => {
    return a.slice(0, a.length / 2);
}

//using substring
// const findFirstHalfString = (a) => {
//     return a.substring(0, a.length / 2);
// }

console.log(findFirstHalfString('abcdefgh'));
console.log(findFirstHalfString('1234'));
console.log(findFirstHalfString('Khalid Hossain'));