import { Sorter } from './Sorter';
// Клас NumberCollection успадковує від Sorter
export class NumberCollection extends Sorter {  
  // Приймає масив чисел у конструкторі
  constructor(public data: number[]) {
    super()
  }
  // Порівнює два елементи за їхніми індексами
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  // Міняє місцями два елементи за їхніми індексами
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
  // Повертає довжину масиву
  get length(): number {
    return this.data.length;
  }
}
