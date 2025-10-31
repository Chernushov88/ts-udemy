const oldCivic = {
    name: 'civic',
    year: new Date,
    broken: true,
    summary() {
        return `
      Name: ${this.name}
      Year: ${this.year}
      Broken? ${this.broken}
    `;
    },
};
const cola = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `
      Cola has: ${this.sugar} grams of sugar
    `;
    },
};
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken? ${vehicle.broken}`)
//   console.log(vehicle.summary())
// }
//printVehicle(oldCivic)
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(cola);
export {};
