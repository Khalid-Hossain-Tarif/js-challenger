// Creating Javascript Sets
// Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result

const newSets = (a, b, c) => {
    let set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);

    return set;
}

console.log(newSets(1, 'b', 3)); //new Set([1, 'b', 3])
console.log(newSets(NaN, null, false)); //new Set([NaN, null, false])
console.log(newSets('a', ['b'], { c: 3 })); //new Set(['a', ['b'], { c: 3 }])