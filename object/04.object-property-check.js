// Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'.
// Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

const objPropertyCheck = (a, b) => {
    return b in a;

    // for(let i in a) {
    //     if(i === b) {
    //         return true
    //     }
    // }
    // return false;
}

console.log(objPropertyCheck({a:1,b:2,c:3},'b')); //true
console.log(objPropertyCheck({x:'a',y:'b',z:'c'},'a')); //false
console.log(objPropertyCheck({x:'a',y:'b',z:undefined},'z')); //true