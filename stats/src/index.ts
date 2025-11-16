import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// Create an object that implaments the DataReader interface
const csvFileReader = new CsvFileReader('./football.csv');
console.log('csvFileReader', csvFileReader);

// Create an object of MatchReader and pass DataReader implamentation to it
const matchReader = new MatchReader(csvFileReader);


// matchReader.matches

async function run() {  
  await matchReader.load();
  
  let manUnitedWins = 0;

  for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {  
      manUnitedWins++;  
    } else if(match[2] ==='Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins++;
    }
  }

  console.log(`Man United won ${manUnitedWins} games`);
}

run()

