// Accessing object properties three
// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

const getObjectProperty = (obj, key) => {
    return obj;
}

console.log(getObjectProperty({ continent: 'Asia',  country: 'Japan'}, 'continent')); //'Asia'
console.log(getObjectProperty({ country: 'Sweden',  continent: 'Europe'}, 'country')); //'Sweden'