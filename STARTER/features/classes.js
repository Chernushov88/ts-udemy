class Vehicle {
    /*color: string = 'red'
    constructor(color: string) {
      this.color = color
    }*/
    constructor(color) {
        this.color = color;
    }
    drive0() {
        console.log(`I'm driving!`);
    }
    stop() {
        console.log(`I'm stopped!`);
    }
    beep() {
        console.log('Beeeeeep!');
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log(`I'm a car and I'm driving!`);
    }
    startDrivindProccess() {
        this.drive();
        this.beep();
    }
}
const vehicle = new Vehicle('black');
vehicle.drive0();
vehicle.stop();
console.log(vehicle.color);
const car = new Car(4, 'green');
car.startDrivindProccess();
car.stop();
export {};
//car.beep() //Property 'beep' is protected and only accessible within class 'Vehicle' and its subclasses.ts(2445)
