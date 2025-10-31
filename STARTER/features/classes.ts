class Vehicle {
  /*color: string = 'red'
  constructor(color: string) {
    this.color = color
  }*/
 constructor(public color: string) {
    
  }

  public drive0(): void {
    console.log(`I'm driving!`)
  }

  public stop(): void {
    console.log(`I'm stopped!`)
  }

  protected beep(): void {
    console.log('Beeeeeep!')
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log(`I'm a car and I'm driving!`)
  }
  startDrivindProccess(): void {
    this.drive()
    this.beep()
  }
}




const vehicle = new Vehicle('black');
vehicle.drive0()
vehicle.stop()
console.log(vehicle.color)

const car = new Car(4, 'green')
car.startDrivindProccess()
car.stop()
//car.beep() //Property 'beep' is protected and only accessible within class 'Vehicle' and its subclasses.ts(2445)
