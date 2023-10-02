// Extract keys from Javascript object
// Write a function that takes an object (a) as argument. Return an array with all object keys.

const getObjectKeys = (a) => {
    return Object.keys(a);
}

console.log(getObjectKeys({a:1,b:2,c:3})); //['a','b','c']
console.log(getObjectKeys({j:9,i:2,x:3,z:4})); //['j','i','x','z']
console.log(getObjectKeys({w:15,x:22,y:13})); //['w','x','y']