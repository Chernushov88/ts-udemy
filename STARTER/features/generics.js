class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfString {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything([1, 3, 4, 5, 6]); //the same new ArrayOfNumbers([1,3,4,5,6])
new ArrayOfNumbers([1, 3, 4, 5, 6]);
new ArrayOfAnything(['a', 'b', 'c', 'd']); //the same new ArrayOfString(['a', 'b', 'c', 'd'])
new ArrayOfString(['a', 'b', 'c', 'd']);
export {};
