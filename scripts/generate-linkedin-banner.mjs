import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "linkedin-banner.html");
const outputPath = path.join(__dirname, "..", "public", "linkedin-banner.png");

execSync(
  `npx playwright screenshot --viewport-size="1584,396" "file://${htmlPath}" "${outputPath}"`,
  { stdio: "inherit" }
);

console.log(`LinkedIn banner saved to ${outputPath} (1584×396)`);
