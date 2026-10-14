import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import { spawn } from "node:child_process";

const root = new URL("../docs/.vuepress/public/images/", import.meta.url);
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

function convert(input, output) {
  return new Promise((resolve, reject) => {
    const child = spawn("cwebp", ["-quiet", "-q", "82", input, "-o", output], {
      stdio: "inherit",
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`cwebp exited with code ${code}`));
    });
  });
}

const files = await walk(root.pathname);
let converted = 0;
for (const input of files) {
  const { dir, name, ext } = parse(input);
  if (!sourceExtensions.has(ext.toLowerCase())) continue;
  const output = join(dir, `${name}.webp`);
  await convert(input, output);
  converted += 1;
  console.log(`${input} -> ${output}`);
}
console.log(`Converted ${converted} images to WebP.`);
