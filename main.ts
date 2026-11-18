// news-image-17b: copies the front-page image for 17 November 2026
// into the output directory as entry.png. No network, stdlib only.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
