// Check if two dates fall on the exact same day
// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.

const compareDates = (a, b) => {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate()=== b.getDate()
}

console.log(compareDates(new Date('2000/01/01'), new Date('2000/01/01'))); //true
console.log(compareDates(new Date('2000/01/01'), new Date('2000/01/02'))); //false
console.log(compareDates(new Date('2001/01/01'), new Date('2000/01/01'))); //false
console.log(compareDates(new Date('2000/11/01'), new Date('2000/01/01'))); //false