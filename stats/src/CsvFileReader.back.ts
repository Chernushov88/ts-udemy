import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]; 

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}
  
  async read(): Promise<void> {
    try {
      const res = await fetch(this.filename)
      const data = await res.text();
      this.data = data
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');      
      })
      .map((row: string[]): MatchData => {        
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]), // Type assertion to number
          parseInt(row[4]),
          row[5] as MatchResult, // Type assertion to MatchResult enum
          row[6]
        ]
      })

    } catch (error) {
      console.error('Error reading the CSV file:', error);
    }
  } 
}