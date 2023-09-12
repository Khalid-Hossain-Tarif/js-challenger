// Split a number into its digits
// Write a function that takes a number (a) as argument. 
// Split a into its individual digits and return them in an array. 
// Hint: you might want to change the type of the number for the splitting

const splitNumberIntoDigits = (a) => {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))

    // return Array.from(String(a), Number);
}

console.log(splitNumberIntoDigits(193278));