// Return the number of days between two dates
// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

const getDays = (a, b) => {
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24

   // return Math.abs((a.getTime() - b.getTime()) / (1000 * 3600 * 24));
}

console.log(getDays(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(getDays(new Date('2000-01-01'), new Date('2020-06-01'))); //7457