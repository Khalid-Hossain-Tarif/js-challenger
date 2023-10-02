// Merge two objects with matching keys
// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key.
// It should be named 'd' instead. Merge both objects and correct the wrong property name.
// Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeTwoObject = (x, y) => {

    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };

    //Another solution:
    // y.d = y.b;
    // delete y.b;
    // return { ...x, ...y };

    //Another solution: not all test case pass
    // delete Object.assign(y, {d: y['b']})['b']
    // return { ...x, ...y };

    //Another solution: not all test case pass
    // Object.assign(y, {d: y['b']});
    // delete y['b'];
    // return { ...x, ...y };
}

console.log(mergeTwoObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); //{ a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeTwoObject({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); //{ a: 5, b: 4, c: 3, e: 2, d: 1}