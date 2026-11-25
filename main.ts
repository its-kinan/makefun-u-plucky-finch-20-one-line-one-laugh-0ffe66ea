// One Line, One Laugh — entry program.
//
// Writes a single funny line to /output/entry.txt (the gate allows 1-200
// characters). Deterministic: no network, no clock, no randomness — the
// same fixed line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my GPS for the meaning of life. It said 'recalculating' — honestly, the most accurate answer I've ever gotten.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
