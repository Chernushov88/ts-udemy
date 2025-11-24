import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";
import type { MatchData } from "./MatchData"; 

interface DataReader {
  read(): Promise<void>;  
  data: string[][];
}

export class MatchReader {

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  async load(): Promise<void> {
     await this.reader.read()

     this.matches = this.reader.data.map((row: string[]): MatchData => {  
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]), // Type assertion to number
          parseInt(row[4]),
          row[5] as MatchResult, // Type assertion to MatchResult enum
          row[6]
        ]
      });
  }
}