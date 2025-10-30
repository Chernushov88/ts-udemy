const colors = ['red', 'green', 'yellow'];
const dates = [new Date(), new Date()];
const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['lemon']
];
const fruitsByColor1 = [];
// Help with inference when extracting values
const color = colors[0];
const color1 = colors.pop();
// Prevent incompatible values
// colors.push(true);
// Help with 'map'
colors.map((color) => {
    return color.toUpperCase();
});
// Flexible types
const importantDates = [new Date()];
importantDates.push('2021-11-11');
importantDates.push(new Date());
export {};
// importantDates.push(10);
