import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';



const numberCollection = new NumberCollection([10,-300, -3, 0, 5, -1, 144]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
const charSorter = new Sorter(characterCollection);
charSorter.sort();
console.log(characterCollection.data);  


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(0);

const listSorter = new Sorter(linkedList);
listSorter.sort();
linkedList.print();
