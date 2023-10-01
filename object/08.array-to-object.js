// Creating Javascript objects three
// Write a function that takes two arrays (a and b) as arguments. 
// Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

const arrayToObject = (a, b) => {

    return a.reduce((acc, el, i) => ({ ...acc, [el]: b[i] }), {});

    //forEach solution:
    // const obj = {};
    // a.forEach((key, val) => {obj[key] = b[val]});
    // return obj;


    //fromEntries solution:
    // const obj = Object.fromEntries(
    //     a.map((key, val) => [key, b[val]]),
    // );

    // return obj;
}

console.log(arrayToObject(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
console.log(arrayToObject(['w','x','y','z'],[10,9,5,2])); //{w:10,x:9,y:5,z:2}
console.log(arrayToObject([1,'b'],['a',2])); //{1:'a',b:2}