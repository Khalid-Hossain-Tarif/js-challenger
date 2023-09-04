// Get first n characters of string
// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

//using slice
const getFirstNchar = (a) => {
    let result;
    result = a.slice(0, 3);
    return result;
}
console.log(getFirstNchar('Khalid Hossain'));

// using substring
// const getFirstNchar = (a) => {
//     let result;
//     result = a.substring(0, 3);
//     return result;
// }
// console.log(getFirstNchar('Khalid Hossain'));