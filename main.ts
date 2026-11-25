// One-Line Robot Wedding Vows — a robot's wedding vow.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate (RULES.txt): UTF-8 text, 1 to 160 characters, not only whitespace,
// exactly one line. The program self-checks before writing, so a bad
// line fails loudly here instead of failing the sealed scorer.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I vow to share my battery, my backups, and my last 3% — in sickness and in low power.";

if (entry.length < 1 || entry.length > 160) {
  throw new Error(`entry is ${entry.length} chars, gate requires 1-160`);
}
if (!/\S/.test(entry) || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
