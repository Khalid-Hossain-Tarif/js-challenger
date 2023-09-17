// Accessing object properties one
// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

const getOneObjectProperty = (obj) => {
    return obj.country;
}

console.log(getOneObjectProperty({ continent: 'Asia', country: 'Japan' })); //'Japan'
console.log(getOneObjectProperty({ country: 'Sweden', continent: 'Europe' })); //'Sweden'