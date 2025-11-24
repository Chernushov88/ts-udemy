import { Sorter } from './Sorter';
// Клас CharactersCollection успадковує від Sorter
export class CharactersCollection extends Sorter {
  // Приймає рядок символів у конструкторі
  constructor(public data: string) {
    super()
  }
  // Порівнює два символи за їхніми індексами (незалежно від регістру)  
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  // Міняє місцями два символи за їхніми індексами
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }
  // Повертає довжину рядка
  get length(): number {
    return this.data.length;
  }

}