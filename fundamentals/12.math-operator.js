// Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e.
// Finally raise to the power of f and return the result. Hint: mind the order.


const calculate = (a, b, c, d, e, f) => {
    return (((a + b - c) * d) / e) ** f;
}


// const calculate = (a, b, c, d, e, f) => {
//     const cal =  ((a + b - c) * d) / e;
//     return Math.pow(cal, f);
// }

console.log(calculate(2,3,6,4,2,3));