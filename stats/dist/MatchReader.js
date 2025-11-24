"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const util_1 = require("./util");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    reader;
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    matches = [];
    constructor(reader) {
        this.reader = reader;
    }
    async load() {
        await this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, util_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]), // Type assertion to number
                parseInt(row[4]),
                row[5], // Type assertion to MatchResult enum
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
