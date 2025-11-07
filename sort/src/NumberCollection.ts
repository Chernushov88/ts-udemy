export class NumberCollection {
  data: number[];
  
  constructor(data: number[]) {
    this.data = data;
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
  
  get length(): number {
    return this.data.length;
  }
}
