// Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

const sortArrayAlphabetically = (arr) => {
    return arr.sort();
}

console.log(sortArrayAlphabetically(['b', 'c', 'd', 'a'])); //['a', 'b', 'c', 'd']
console.log(sortArrayAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); //['a', 'a', 'c', 'd', 'w', 'y', 'z']