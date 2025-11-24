import * as fs from "fs";
import * as path from "path";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}  
  async read(): Promise<void> {
    try {
      const filePath = path.resolve(__dirname, "..", this.filename);
      const data = fs.readFileSync(filePath, { encoding: "utf-8" });
      this.data = data
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');      
      })

    } catch (error) {
      console.error('Error reading the CSV file:', error);
    }
  } 
}