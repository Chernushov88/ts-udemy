export abstract class CsvFileReader<T> { 
  data: T[] = []; // T = TypeOfData

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T  
  
  async read(): Promise<void> {
    try {
      const res = await fetch(this.filename)
      const data = await res.text();
      this.data = data
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');      
      })
      .map(this.mapRow)

    } catch (error) {
      console.error('Error reading the CSV file:', error);
    }    
  } 
  
}