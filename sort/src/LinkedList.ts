import { Sorter } from './Sorter';
// Вузол зв'язаного списку
class Node {
  next: Node | null = null
  constructor(public data: number) {}
}
// Клас LinkedList успадковує від Sorter
export class LinkedList extends Sorter {
  head: Node | null = null
  // Додає новий елемент до зв'язаного списку
  add(data: number): void {
    const node = new Node(data)
    if(!this.head) {
      this.head = node
      return
    }
    let tail = this.head
    while(tail.next) {
      tail = tail.next
    }
    tail.next = node
  }
  // Повертає довжину зв'язаного списку
  get length(): number {
    if(!this.head) {
      return 0
    }
    let length = 1
    let node = this.head
    while(node.next) {
      length++
      node = node.next
    }
    return length
  }
  // Повертає вузол за індексом
  at(index: number): Node {
    if(!this.head) {
      throw new Error('Index out of bounds')
    }
    let counter = 0
    let node: Node | null = this.head
    while(node) {
      if(counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    throw new Error('Index out of bounds')
  }
  // Порівнює два елементи за їхніми індексами
  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
      throw new Error('List is empty')
    }
    return this.at(leftIndex).data > this.at(rightIndex).data
  }
  // Міняє місцями два елементи за їхніми індексами
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const temp = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = temp
  }
  // Виводить елементи зв'язаного списку в консоль
  print(): void {
    if(!this.head) {
      return
    }
    let node: Node | null = this.head
    while(node) {
      console.log(node.data)
      node = node.next
    }
  }
}