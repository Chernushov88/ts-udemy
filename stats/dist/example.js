"use strict";
// const add = (a: number, b: number): number => {
//   return a + b;
// }
// add(10, 1);
// add(10, 2);
// add(10, 3);
/*
class HoldNumber {
  data: number = 0;
}

class HoldString {
  data: string = '0';
}

const holdNumber = new HoldNumber();
holdNumber.data = 333;

const holdString = new HoldString();
holdString.data = 'asdfaf';
*/
/*class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 111;

const holdString = new HoldAnything<string>();
holdString.data = 'sadf';
*/
// Composition misconception
/*
const rectangular = (state) => {
  return {
    area: () => state.width * state.height
  };
};

const openable = (state) => {
  return {
    toggleOpen: () => {
      state.isOpen = !state.isOpen;
    }
  };
};

const buildRectangularWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
}

const rectangWindow = buildRectangularWindow({
  height: 30,
  width: 20,
  openable: false
})*/ 
