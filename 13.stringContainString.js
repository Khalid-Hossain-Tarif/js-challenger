// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a.
// If not, append it to the end. Return the concatenation

const checkString = (a, b) => {
    if(a === b) {
        return b.concat(a)
    }
}

checkString(1, 2);