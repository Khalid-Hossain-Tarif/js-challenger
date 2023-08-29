// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

// Test Cases:
// myFunction('abcd',1)
// Expected
// 'a'

// myFunction('zyxbwpl',5)
// Expected
// 'w'

// myFunction('gfedcba',3)
// Expected
// 'e'

const nthCharacterOfString = (a, n) => {
    return a.charAt(n)
}

console.log(nthCharacterOfString('abcd', 1));
console.log(nthCharacterOfString('zyxbwpl', 5));
console.log(nthCharacterOfString('gfedcba', 3));