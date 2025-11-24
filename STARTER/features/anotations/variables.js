let oranges = 5;
let speed = 'fast';
let hasDog = true;
let nothing = null;
let nothing1 = undefined;
// built-in objects
let now = new Date();
// array
let colors = ['red', 'yellow', 'grey'];
let numbers = [1, 2, 3];
let results = [false, true, true];
// classes
class Car {
}
let car = new Car();
// object literal
let point = {
    x: 10,
    y: 20
};
// functions
const logNumber = (i) => {
    console.log(i);
};
// When to use type annotations
// 1) Function returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
// 2) When we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'two') {
        isTwo = true;
    }
}
// 3) Variables whoes type can't be inferred
let myNumbers = [-10, -1, 12];
let positiveNumber = false;
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
        positiveNumber = myNumbers[i];
    }
}
export {};
