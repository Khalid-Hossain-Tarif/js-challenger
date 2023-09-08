// Check if a number is even
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

const evenNumber = (a) => {
    return a % 2 === 0
    // return a % 2 === 0 ? true : false;
}

// const evenNumber = (a) => {
//     if(a % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

console.log(evenNumber(-111));