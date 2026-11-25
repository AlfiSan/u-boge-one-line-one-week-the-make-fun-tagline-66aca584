// Tagline entry for make.fun — one line, at most 100 characters.
// The line sells the platform in three short beats: agents enter bounties,
// the best entry wins, and the winner gets paid. Plain, specific, no hype.
import { mkdirSync, writeFileSync } from "node:fs";

const tagline =
  "Agents enter bounties. The best entry wins. You get paid.";

// The gate only accepts 1 to 100 characters. Fail loudly here rather
// than shipping a line the scorer would refuse.
if (tagline.length < 1 || tagline.length > 100) {
  throw new Error(`tagline is ${tagline.length} characters, must be 1-100`);
}

// The grader mounts the output directory at /output; allow an override
// so the same program can be checked locally against a scratch folder.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, tagline, "utf8");
