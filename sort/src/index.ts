
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';



const numberCollection = new NumberCollection([10,-300, -3, 0, 5, -1, 144]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharactersCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection.data);  


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(0);

linkedList.sort();
linkedList.print();
