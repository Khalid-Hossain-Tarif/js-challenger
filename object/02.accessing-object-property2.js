// Accessing object properties two
// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'.
// Hint: you might want to use the square brackets property accessor

const getObjectProperty = (obj) => {
    return obj['prop-2'];
}

console.log(getObjectProperty({  one: 1,  'prop-2': 2})); //2
console.log(getObjectProperty({  'prop-2': 'two',  prop: 'test'})); //'two'