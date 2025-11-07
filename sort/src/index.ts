import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([10,-300, -3, 0, 5, -1, 144]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);