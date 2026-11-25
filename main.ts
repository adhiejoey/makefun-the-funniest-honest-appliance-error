import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "ERROR: Stuck under the sofa again. Battery 3%. The dust bunnies have accepted me as one of their own. Goodbye.";

if ([...entry].length < 1 || [...entry].length > 200 || entry.trim().length === 0) {
  throw new Error("Entry must be 1 to 200 characters of non-blank text.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
