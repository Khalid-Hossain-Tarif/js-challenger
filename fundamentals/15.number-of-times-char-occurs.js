// How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.


const numberOfTimesCharOccurs = (a, b) => {
    return b.split(a).length-1;
}

console.log(numberOfTimesCharOccurs('h', 'how many times does the character occur in this sentence?'));


// const numberOfTimesCharOccurs = (a, b) => {
//     let count = 0;

//     for (let i = 0; i < b.length; i++) {
//         if(b.charAt(i) == a) {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(numberOfTimesCharOccurs('h', 'how many times does the character occur in this sentence?'));