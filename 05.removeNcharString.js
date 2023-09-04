// Remove first n characters of string
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

const removeCharacter = (a) => {
    const str = a.slice(3);
    return str;
}
console.log(removeCharacter("Khalid Hossain"));