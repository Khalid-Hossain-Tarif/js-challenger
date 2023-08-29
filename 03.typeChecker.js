// Get type of value
// Write a function that takes a value as argument. Return the type of the value.

// Test Cases:
// myFunction(1)
// Expected
// 'number'

// myFunction(false)
// Expected
// 'boolean'

// myFunction({})
// Expected
// 'object'

// myFunction(null)
// Expected
// 'object'

// myFunction('string')
// Expected
// 'string'

// myFunction(['array'])
// Expected
// 'object'


const typeChecker = (x) => {
    return typeof(x);
}

console.log(typeChecker(10));
console.log(typeChecker(false));
console.log(typeChecker({}));
console.log(typeChecker(null));
console.log(typeChecker('10'));
console.log(typeChecker(['1', '2', '3']));