import type { OutputTarget } from "../Summary";
import * as fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `
    try {
      fs.writeFileSync('report.html', html)
      console.log("Файл успешно записан");
    } catch (error) {
      console.log("Помилка запису:", error);
    }
  }    
}
