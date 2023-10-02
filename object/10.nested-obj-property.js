// Return nested object property
// Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties.
// Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

const getNestedObjProperty = (obj) => {
    return obj?.a?.b;
}

console.log(getNestedObjProperty({a:1})); //undefined
console.log(getNestedObjProperty({a:{b:{c:3}}})); //{c:3}
console.log(getNestedObjProperty({b:{a:1}})); //undefined
console.log(getNestedObjProperty({a:{b:2}})); //2