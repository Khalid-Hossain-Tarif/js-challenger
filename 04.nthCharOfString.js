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

const nthCharOfString = (a, n) => {
    return a.charAt(n - 1)
    // return a[n-1]
}

console.log(nthCharOfString('abcd', 1));
console.log(nthCharOfString('zyxbwpl', 5));
console.log(nthCharOfString('gfedcba', 3));