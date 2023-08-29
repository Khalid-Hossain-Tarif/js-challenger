// Comparison operators, strict equality:
// Write a function that takes two values, say a and b, as arguments. 
// Return true if the two values are equal and of the same type

// Test Cases:
// myFunction(2, 3)
// Expected
// false 

// myFunction(3, 3)
// Expected
// true 

// myFunction(1, '1')
// Expected
// false 

// myFunction('10', '10')
// Expected
// true 

const compareOperator = (a, b) => {
    return a === b;
}

console.log(compareOperator(2, 3));
console.log(compareOperator(3, 3));
console.log(compareOperator(1, '1'));
console.log(compareOperator('10', '10'));