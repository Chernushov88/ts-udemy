// pattern Template Method
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Створюємо екземпляр NumberCollection з масивом чисел
// Клас NumberCollection знає, як порівнювати і міняти місцями елементи цього масиву
const numberCollection = new NumberCollection([10,-300, -3, 0, 5, -1, 144]);
// Викликаємо метод sort() (успадкований від Sorter)
// Він використовує compare() і swap() всередині, щоб відсортувати дані
numberCollection.sort();
console.log(numberCollection.data);

// Створюємо екземпляр CharactersCollection з рядком символів
const characterCollection = new CharactersCollection('Xaayb');
// Сортуємо символи у рядку в алфавітному порядку (незалежно від регістру)
characterCollection.sort();
console.log(characterCollection.data);  

// Створюємо екземпляр LinkedList і додаємо кілька чисел
const linkedList = new LinkedList();
// Додамо числа до зв'язаного списку
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(0);
// Сортуємо зв'язаний список`
linkedList.sort();
linkedList.print();
