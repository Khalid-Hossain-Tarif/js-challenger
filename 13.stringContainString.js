// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a.
// If not, append it to the end. Return the concatenation


const checkString = (a, b) => {
    // return a.includes(b) ? b + a : a + b;
    return a.indexOf(b) === -1 ? a + b : b + a
}

// const checkString = (a, b) => {
//     if(a.includes(b)) {
//         return b + a;
//     }
//     else {
//         return a + b;
//     }
// }

console.log(checkString('cheese', 'cake'));
console.log(checkString('lips', 's'));
console.log(checkString('Java', 'script'));
console.log(checkString(' think, therefore I am', 'I'));
console.log(checkString('21', 2));