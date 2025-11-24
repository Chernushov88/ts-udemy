"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinAnazersis_1 = require("./analyzers/WinAnazersis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that implaments the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
// Create an object of MatchReader and pass DataReader implamentation to it
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
(async () => {
    await matchReader.load();
    // const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport())
    // summary.buildAndPrintReport(matchReader.matches)
    const summary = new Summary_1.Summary(new WinAnazersis_1.WinAnalysis('Man United'), new HtmlReport_1.HtmlReport());
    summary.buildAndPrintReport(matchReader.matches);
})();
// "build": "tsc && vite build",
