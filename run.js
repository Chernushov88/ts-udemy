import fs from "fs";
import { execSync } from "child_process";
try {
  // 1️⃣ Зчитуємо шлях з run.json
  const config = JSON.parse(fs.readFileSync("./run.json", "utf8"));
  const tsPath = config.file;

  // 2️⃣ Компілюємо TS → JS
  console.log(`\n🛠️  Compiling ${tsPath}...\n`);
  execSync(`npx tsc "${tsPath}"`, { stdio: "inherit" });

  // 3️⃣ Формуємо шлях до JS-файлу
  const jsPath = tsPath.replace(/\.ts$/, ".js");

  // 4️⃣ Виконуємо JS-файл і показуємо його результат
  console.log(`\n🚀 Running: ${jsPath}\n`);
  const output = execSync(`node "${jsPath}"`, { encoding: "utf8" });
  console.log(output);

  console.log("\n✅ Execution finished.\n");
} catch (error) {
  console.error("\n❌ Error occurred:\n");
  if (error.stdout) console.error(error.stdout.toString());
  else console.error(error.message);
}
