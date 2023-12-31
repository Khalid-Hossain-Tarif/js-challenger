// Check if one date is earlier than another
// Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.

const checkTwoDates = (a, b) => {
    return a < b;
}

console.log(checkTwoDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //true
console.log(checkTwoDates(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))); //false
console.log(checkTwoDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false