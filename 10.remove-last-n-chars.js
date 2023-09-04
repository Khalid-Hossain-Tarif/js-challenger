// Remove last n characters of string
// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

//using slice
const removeLastNChars = (a) => {
    return a.slice(0, -3)
}

//using substring
// const removeLastNChars = (a) => {
//     return a.substring(0, a.length-3)
// }

console.log(removeLastNChars('abcdcba'));