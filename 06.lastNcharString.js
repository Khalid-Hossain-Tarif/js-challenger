// Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

//using slice
const findLastChar = (str) => {
    let result;
    result = str.slice(str.length - 4);
    return result;
}
console.log(findLastChar('Khalid Hossain'));


// using substring
// const findLastChar = (str) => {
//     let result;
//     result = str.substring(str.length - 3);
//     return result;
// }
// console.log(findLastChar('Khalid Hossain'));