// Return the longest string from an array of strings
// Write a function that takes an array of strings as argument. Return the longest string.

const arrayLongestStringFinder = (arr) => {
    return arr.reduce((a, b) => a.length >= b.length ? a : b);
}

console.log(arrayLongestStringFinder(['help', 'me'])); //'help'
console.log(arrayLongestStringFinder(['I', 'need', 'candy'])); //'candy'