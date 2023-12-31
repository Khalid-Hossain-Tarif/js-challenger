// Remove a property from an object
// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

const removeObjProperty = (obj) => {

    const { b, ...rest } = obj;
    return rest;

    // delete obj.b;
    // return obj;
}

console.log(removeObjProperty({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }
console.log(removeObjProperty({ b: 0, a: 7, d: 8 })); //{ a: 7, d: 8 }
console.log(removeObjProperty({ e: 6, f: 4, b: 5, a: 3 })); //{ e: 6, f: 4, a: 3 }