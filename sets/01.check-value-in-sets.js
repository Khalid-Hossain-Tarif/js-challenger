// Check if value is present in Set
// Write a function that takes a Set and a value as arguments. Check if the value is present in the Set

const checkValueInSets = (set, val) => {
    return set.has(val);
}


console.log(checkValueInSets(new Set([1, 2, 3]), 2)); //true
console.log(checkValueInSets(new Set([123]), 2)); //false
console.log(checkValueInSets(new Set(['1', '2', '3']), '2')); //true
console.log(checkValueInSets(new Set('123'), '2')); //true