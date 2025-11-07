import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([10,-300, -3, 0, 5, -1, 144]);
const sorter = new Sorter(numberCollection);
sorter.sort();

const characterCollection = new CharactersCollection('Xaayb');
const charSorter = new Sorter(characterCollection);
charSorter.sort();

console.log(characterCollection.data);  
console.log(numberCollection.data);