class ArrayOfNumbers {
  constructor(public collection: number[]) {} 

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T>{
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<number>([1,3,4,5,6]) //the same new ArrayOfNumbers([1,3,4,5,6])
new ArrayOfNumbers([1,3,4,5,6])
new ArrayOfAnything<string>(['a', 'b', 'c', 'd']) //the same new ArrayOfString(['a', 'b', 'c', 'd'])
new ArrayOfString(['a', 'b', 'c', 'd'])


function printString(arr: string[]): void {
  for(let i = 0; i < arr.length;  i++){
    console.log(arr[i]);
    
  }
}

function printNumber(arr: string[]): void {
  for(let i = 0; i < arr.length;  i++){
    console.log(arr[i]);
    
  }
}

function printAnithing<T>(arr: T[]): void {
  for(let i = 0; i < arr.length;  i++){
    console.log(arr[i]);
    
  }
}

printAnithing([1,3,4,5,6]) 
printAnithing<number>([1,3,4,5,6]) 

// Generic Constraints
class Human {
  print() {
    console.log('I am a human')
  }
}

class Robot {
  print() {
    console.log('I am a robot')
  }
}

interface Printable {
  print(): void
}

function printAnithing1<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++){    
    arr[i].print()
  }
}

printAnithing1<Human>([new Human(), new Human()]) 
printAnithing1<Robot>([new Robot(), new Robot()]) 