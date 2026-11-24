import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const label =
  "WARNING: This human presses snooze nine times, then blames the alarm it set itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
