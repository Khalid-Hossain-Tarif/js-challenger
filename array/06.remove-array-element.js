// Remove a specific array element
// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

const arrayElementRemover = (a, b) => {
    return a.filter(curr => curr !== b);

}

console.log(arrayElementRemover([1,2,3], 2)); // [1, 3]

console.log(arrayElementRemover([1,2,'2'], '2')); // [1, 2]

console.log(arrayElementRemover([false,'2',1], false)); // ['2', 1]

console.log(arrayElementRemover([1,2,'2',1], 1)); // [2, '2']