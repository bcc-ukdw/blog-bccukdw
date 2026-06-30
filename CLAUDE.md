# blog-bccukdw — BCC UKDW blog content

This repository holds the **content** (Markdown articles) for the BCC UKDW blog at
https://blog.bccukdw.xyz. The website is a separate Next.js app that reads posts from here.
There is no application code or build step in this repo — you publish by adding Markdown
files and opening a pull request.

## Writing or submitting an article

Follow the **contribute-blog-post** skill: `.claude/skills/contribute-blog-post/SKILL.md`.
Full author reference: `posts/_template/README.md`. Start by copying `posts/_template/`.

## Non-negotiables

- **Three languages per post.** `posts/<slug>/id.md`, `en.md`, and `cn.md` — all three
  (the site hides any language whose file is missing).
- **Inline images use absolute `raw.githubusercontent.com/...` URLs.** Relative paths
  render broken because the site runs on a different domain than this repo.
- **Submit via pull request to `main`** (fork first if you don't have write access).
- Slug = lowercase with hyphens, and never starts with `_` (`_`-folders are ignored).

## Layout

```
posts/
  _template/              # starter files + README.md (author guide) — ignored by the site
  <slug>/
    id.md  en.md  cn.md   # one article, three languages
    images/              # this post's images, referenced by absolute raw URL
```
