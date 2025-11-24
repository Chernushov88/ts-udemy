"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnazersis_1 = require("./analyzers/WinAnazersis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    analyzer;
    outputTarget;
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinAnazersis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
