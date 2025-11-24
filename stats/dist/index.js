"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { WinAnalysis } from './analyzers/WinAnazersis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
const Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
// Create an object that implaments the DataReader interface
// const csvFileReader = new CsvFileReader('./football.csv');
// Create an object of MatchReader and pass DataReader implamentation to it
// const matchReader = new MatchReader(csvFileReader);
(async () => {
    const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
    await matchReader.load();
    // const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport())
    // summary.buildAndPrintReport(matchReader.matches)
    // const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport())
    // summary.buildAndPrintReport(matchReader.matches)
    const summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
    summary1.buildAndPrintReport(matchReader.matches);
})();
// "build": "tsc && vite build",
