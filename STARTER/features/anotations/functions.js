const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
};
const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather(todayWeather);
export {};
