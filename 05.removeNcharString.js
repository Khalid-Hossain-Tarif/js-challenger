// Remove first n characters of string
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

//using slice
const removeCharacter = (a) => {
    let str;
    str = a.slice(3);
    return str;
}
console.log(removeCharacter("Khalid Hossain"));

// using substring
// const removeCharacter = (a) => {
//     let str;
//     str = a.substring(3);
//     return str;
// }
// console.log(removeCharacter("Khalid Hossain"));

//using replace
// const removeCharacter = (a) => {
//     let str;
//     str = a.replace(/.{3}/, '');
//     return str;
// }
// console.log(removeCharacter('Khalid Hossain'));