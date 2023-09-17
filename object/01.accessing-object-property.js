// Accessing object properties one
// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

const getObjectProperty = (obj) => {
    return obj.country;
}

console.log(getObjectProperty({ continent: 'Asia', country: 'Japan' })); //'Japan'
console.log(getObjectProperty({ country: 'Sweden', continent: 'Europe' })); //'Sweden'