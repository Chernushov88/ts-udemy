export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}
  
  async read(): Promise<void> {
    try {
      const res = await fetch(this.filename)
      const data = await res.text();
      this.data = data
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');      
      });

    } catch (error) {
      console.error('Error reading the CSV file:', error);
    }
  } 
}