// Compile every blog post as MDX, matching the site's render pipeline
// (gray-matter frontmatter strip + @mdx-js/mdx + remark-gfm — same as
// blog-FE/src/lib/github.ts -> MDXContent). Fails the job on any invalid
// post so broken MDX can't reach production and 500 the article page.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

const POSTS_DIR = "posts";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

if (!existsSync(POSTS_DIR)) {
  console.log("No posts/ directory — nothing to validate.");
  process.exit(0);
}

// Only locale content files (id/en/cn) in either extension; docs like
// posts/_template/README.md are not post content and are skipped.
const files = walk(POSTS_DIR)
  .filter((p) => /\/(id|en|cn)\.mdx?$/.test(p))
  .sort();

let failed = 0;
for (const file of files) {
  const raw = readFileSync(file, "utf8");
  let content;
  try {
    content = matter(raw).content; // strip frontmatter, like the site does
  } catch (e) {
    failed++;
    console.error(`FAIL  ${file} — invalid frontmatter: ${String(e.message).split("\n")[0]}`);
    continue;
  }
  try {
    await compile(content, { remarkPlugins: [remarkGfm] });
    console.log(`ok    ${file}`);
  } catch (e) {
    failed++;
    const where = e.line ? ` (L${e.line}:${e.column})` : "";
    console.error(`FAIL  ${file}${where} — ${String(e.reason || e.message).split("\n")[0]}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} post file(s) failed MDX compile. Fix them before merging.`);
  console.error(`Tip: escape a literal "<" as "&lt;", drop <!-- HTML comments -->, and write links as [text](url) instead of <url>.`);
  process.exit(1);
}
console.log(`\nAll ${files.length} post file(s) compile as MDX. `);
