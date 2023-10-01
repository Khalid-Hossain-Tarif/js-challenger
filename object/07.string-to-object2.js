// Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments. 
// Create an object that has a property with key 'a' and a value of 'b'. Return the object.

const stringToObject = (a, b) => {
    return { [a]: b };

    // const obj = {};
    // obj[a] = b;
    // return obj
}

console.log(stringToObject('a','b')); //{a:'b'}
console.log(stringToObject('z','x')); //{z:'x'}
console.log(stringToObject('b','w')); //{b:'w'}