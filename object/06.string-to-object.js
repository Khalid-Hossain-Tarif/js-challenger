// Creating Javascript objects one
// Write a function that takes a string as argument. 
// Create an object that has a property with key 'key' and a value equal to the string. Return the object.

const stringToObject = (a) => {
    return { key: a };

    // const obj = {};
    // obj.key = a;
    // return obj
}

console.log(stringToObject('a')); //{key:'a'}
console.log(stringToObject('z')); //{key:'z'}
console.log(stringToObject('b')); //{key:'b'}