import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = readFileSync("line.txt", "utf8");
if (line.length < 1 || line.length > 200) throw new Error("line must be 1-200 chars");
if (line.includes("\n") || line.includes("\r")) throw new Error("line must be a single line");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
