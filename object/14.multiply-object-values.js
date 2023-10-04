// Multiply all object values by x
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

const multiplyObjectValues = (a, b) => {

    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});

    // const result = {};
    // for (const key in a) {
    //     if (a.hasOwnProperty(key)) {
    //         result[key] = a[key] * b;
    //     }
    // }
    // return result;
}

console.log(multiplyObjectValues({a:1,b:2,c:3},3)); //{a:3,b:6,c:9}
console.log(multiplyObjectValues({j:9,i:2,x:3,z:4},10)); //{j:90,i:20,x:30,z:40}
console.log(multiplyObjectValues({w:15,x:22,y:13},6)); //{w:90,x:132,y:78}