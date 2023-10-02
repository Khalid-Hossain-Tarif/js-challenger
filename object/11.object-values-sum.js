// Sum object values
// Write a function that takes an object (a) as argument. Return the sum of all object values.

const objectValueSum = (a) => {
    return Object.values(a).reduce((acc, cur) => acc + cur, 0);

    // let sum = 0;
    // for (let val of Object.values(a)) {
    //     sum += val;
    // }
    // return sum;
}

console.log(objectValueSum({a:1,b:2,c:3})); //6
console.log(objectValueSum({j:9,i:2,x:3,z:4})); //18
console.log(objectValueSum({w:15,x:22,y:13})); //50