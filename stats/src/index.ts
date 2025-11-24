import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalysis } from './analyzers/WinAnazersis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary'

// Create an object that implaments the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an object of MatchReader and pass DataReader implamentation to it
const matchReader = new MatchReader(csvFileReader);

( async () => {
  await matchReader.load()
  const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport())
  summary.buildAndPrintReport(matchReader.matches)
})()

