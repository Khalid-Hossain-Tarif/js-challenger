<!--Find the position of one string in another 08.findStrPositionInAnother-->
<!--Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.-->

const findStrPosition = (a) => {
    const substr = 'is';
    let result;
    result = a.indexOf(substr);
    return result;
}

console.log(findStrPosition('paris'));