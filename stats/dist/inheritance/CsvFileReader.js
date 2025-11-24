"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
class CsvFileReader {
    filename;
    data = []; // T = TypeOfData
    constructor(filename) {
        this.filename = filename;
    }
    async read() {
        try {
            const res = await fetch(this.filename);
            const data = await res.text();
            this.data = data
                .split('\n')
                .map((row) => {
                return row.split(',');
            })
                .map(this.mapRow);
        }
        catch (error) {
            console.error('Error reading the CSV file:', error);
        }
    }
}
exports.CsvFileReader = CsvFileReader;
