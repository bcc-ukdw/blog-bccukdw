---
name: contribute-blog-post
description: Use when writing, translating, or submitting an article for the BCC UKDW blog (blog.bccukdw.xyz), or opening a content pull request to the bcc-ukdw/blog-bccukdw repository.
---

# Contribute a BCC UKDW Blog Post

## Overview

This repo (`bcc-ukdw/blog-bccukdw`) holds the **content** for the blog at blog.bccukdw.xyz. The website is a separate Next.js app that reads Markdown from here — there is no code or build step in this repo. You publish by adding Markdown files and opening a pull request.

**Three non-negotiables — a post is incomplete without all of them:**

1. **Three languages.** Every post needs `id.md`, `en.md`, AND `cn.md`. The site hides any language whose file is missing.
2. **Absolute image URLs.** Inline images MUST use the full `https://raw.githubusercontent.com/...` URL. Relative paths render broken (the site runs on a different domain than this repo).
3. **Submit via pull request** to `bcc-ukdw/blog-bccukdw` `main`. Don't assume direct push access.

## The flow

1. **Fork** `bcc-ukdw/blog-bccukdw` (skip if you already have write access — just create a branch).
2. **Copy `posts/_template/`** and rename it to your slug → `posts/<your-slug>/`. The slug is lowercase with hyphens, no spaces, and must NOT start with `_`. It becomes the URL: `blog.bccukdw.xyz/<your-slug>`.
3. **Write all three files** `id.md`, `en.md`, `cn.md` — the same article, translated. Keep `date`, `author`, `authorName`, and `category` **identical** across all three; translate `title`, `excerpt`, and `tags`.
4. **Fill the frontmatter** (see Quick reference below; full field table in `posts/_template/README.md`).
5. **Add images** to `posts/<your-slug>/images/` and reference them with absolute URLs (see Images).
6. **Validate** against the checklist.
7. **Commit → push to your fork → open a PR** to `bcc-ukdw/blog-bccukdw` `main`. After a maintainer merges, it goes live in ~1 hour.

## Git commands (new to GitHub? use these)

```bash
# 1. Click "Fork" on github.com/bcc-ukdw/blog-bccukdw, then clone YOUR fork:
git clone https://github.com/<your-username>/blog-bccukdw.git
cd blog-bccukdw
git checkout -b post/<your-slug>
# 2. Create posts/<your-slug>/{id,en,cn}.md + images/  (copy posts/_template/)
git add posts/<your-slug>
git commit -m "post: <your title>"
git push -u origin post/<your-slug>
# 3. Open the PR against the upstream repo:
gh pr create --repo bcc-ukdw/blog-bccukdw --base main --fill
```

Prefer no terminal? You can fork, add the files, and open the PR entirely on github.com.

## Quick reference — frontmatter

```yaml
---
title: "Your Title"
date: "2026-07-01"               # YYYY-MM-DD — same in all 3 files
author: "your-github-username"   # your GitHub username → links to /authors/<author>
authorName: "Your Full Name"     # human-readable display name
authorAvatar: "https://github.com/your-github-username.png"  # optional
category: "Tutorial"             # free-form; reuse an existing one (Tutorial, Story, Blockchain). Same in all 3 files
tags: ["web3", "solidity"]
excerpt: "A 1-2 sentence summary."
cover: "https://images.unsplash.com/...?w=1200"  # optional, allowed hosts only
---
```

- `readTime` is **auto-calculated — omit it.** Exception: in `cn.md`, set it manually to the **same number the `en`/`id` version shows** (the auto-count undercounts Chinese, which has no spaces between words).
- Allowed hosts for `cover` / `authorAvatar`: `raw.githubusercontent.com`, `*.githubusercontent.com`, `images.unsplash.com`, `i.imgur.com`, `bccukdw.xyz`. Any other host is rejected by the site.

## Images (the #1 mistake)

Put image files in your post's `images/` folder, then reference them with the **absolute** raw URL:

```markdown
✅ ![Diagram of the flow](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/your-slug/images/diagram.png)

❌ ![Diagram](./images/diagram.png)     ← renders broken
❌ ![Diagram](images/diagram.png)       ← renders broken
```

Pattern: `https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/<slug>/images/<file>`. For a visible caption, add an italic line under the image: `*Caption here.*`

## Validation checklist

- [ ] `posts/<slug>/` contains `id.md`, `en.md`, AND `cn.md`.
- [ ] Each file's frontmatter has `title`, `date`, `author`, `authorName`, `category`, `tags`, `excerpt`.
- [ ] Every inline image uses an absolute `raw.githubusercontent.com/...` URL.
- [ ] `cover` (if set) uses an allowed host.
- [ ] Slug is lowercase-hyphenated and does NOT start with `_`.

## Common mistakes

| Mistake | Fix |
|---|---|
| Only wrote `en.md` | Add `id.md` + `cn.md` — all three are required |
| Relative image path | Use the absolute `raw.githubusercontent.com/...` URL |
| Slug starts with `_` | `_`-prefixed folders are ignored by the site; rename it |
| Set `readTime` on every file | Omit it (auto); set it only in `cn.md` |
| Pushed a branch and waited | Open a PR to `main`; it publishes after merge |
| Only translated the body | Translate `title`, `excerpt`, `tags` per language too |

Full author reference: `posts/_template/README.md`. Starting point: `posts/_template/`.
