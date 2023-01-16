//unshift

const myArray = [1, 2, 3];
console.log(myArray);

myArray.unshift(true);

console.log(myArray);

myArray.unshift(`abc`);

console.log(myArray);

//shift

const myArray_1 = [1, 2, 3];
console.log(myArray_1);

myArray_1.shift();

const removedElement = myArray_1.shift();

console.log(myArray_1);
console.log(removedElement);
