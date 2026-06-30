# Panduan Penulis — Blog BCC UKDW

Cara menulis artikel untuk [blog.bccukdw.xyz](https://blog.bccukdw.xyz). Baca sekali, lalu copy folder `_template/` jadi titik mulai.

---

## 1. Struktur folder

Satu artikel = satu folder. Nama folder = **slug** (jadi bagian URL). Tiap folder berisi 1 file per bahasa:

```
posts/
  nama-artikel-kamu/        ← slug, huruf kecil, pakai tanda hubung (-)
    id.md                   ← Bahasa Indonesia
    en.md                   ← English
    cn.md                   ← 中文
    images/                 ← (opsional) gambar artikel ini, lihat bagian Gambar
      diagram.png
```

- Slug: huruf kecil semua, kata dipisah `-`, tanpa spasi/simbol. Contoh: `mengenal-smart-contract`.
- URL hasilnya: `https://blog.bccukdw.xyz/nama-artikel-kamu`.
- **Wajib bikin ketiga bahasa** (`id`, `en`, `cn`). Kalau salah satu bahasa belum ada, artikel tidak muncul di bahasa itu.
- Slug yang diawali `_` (seperti `_template`) **diabaikan** sistem — aman buat contoh/draft.

## 2. Bikin artikel baru (langkah)

1. Copy folder `_template/` → ganti namanya jadi slug artikelmu.
2. Isi frontmatter (lihat bagian 3) di **ketiga** file `id.md`, `en.md`, `cn.md`.
3. Tulis isi pakai Markdown biasa.
4. Hapus baris contoh yang tidak dipakai.
5. Commit + push ke branch `main`. Live dalam ~1 jam (cache revalidate tiap 1 jam; halaman artikel tiap 24 jam).

## 3. Frontmatter

Blok di antara `---` paling atas. Semua nilai pakai tanda kutip `"..."`.

| Field          | Wajib? | Contoh                                            | Catatan |
|----------------|--------|---------------------------------------------------|---------|
| `title`        | ✅     | `"Mengenal Smart Contract"`                       | Judul artikel. |
| `date`         | ✅     | `"2026-06-30"`                                     | Format `YYYY-MM-DD`. Dipakai untuk urutan (terbaru di atas). |
| `author`       | ✅     | `"bcc-ukdw"`                                       | Username GitHub. Jadi URL halaman penulis `/authors/<author>`. |
| `authorName`   | ✅     | `"BCC UKDW"`                                       | Nama tampilan. |
| `authorAvatar` | ⬜     | `"https://github.com/bcc-ukdw.png"`               | Foto penulis. Default `https://github.com/<username>.png`. Lihat aturan host gambar. |
| `category`     | ✅     | `"Tutorial"`                                       | Satu kategori. Konsisten antar artikel (mis. `Tutorial`, `Blockchain`, `Event`). |
| `tags`         | ✅     | `["solidity", "web3"]`                             | Array. Huruf kecil. |
| `excerpt`      | ✅     | `"Ringkasan 1-2 kalimat."`                         | Tampil di kartu daftar + deskripsi SEO/share. |
| `cover`        | ⬜     | `"https://images.unsplash.com/photo-xxx?w=1200"`  | Gambar hero + thumbnail share. **Host harus diizinkan** (lihat Gambar). Lebar ≥1200px. |
| `readTime`     | ⬜     | `5`                                               | **Jangan diisi** — dihitung otomatis dari panjang teks. Isi hanya kalau mau override (angka, menit). |

> `excerpt`, `tags`, dan `cover` harus **diterjemahkan/disesuaikan** per bahasa juga, bukan cuma isi artikel.

## 4. Gambar — BACA INI

Ini bagian yang paling sering salah.

### Aturan #1: gambar inline WAJIB pakai URL absolut

Artikel dirender di domain blog (`blog.bccukdw.xyz`), **bukan** di repo ini. Jadi **path relatif tidak akan jalan** — gambar muncul rusak.

❌ **Salah** (path relatif / lokal):
```markdown
![Diagram](./images/diagram.png)
![Diagram](images/diagram.png)
```

✅ **Benar** (URL absolut ke raw GitHub repo ini):
```markdown
![Diagram alur smart contract](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/nama-artikel-kamu/images/diagram.png)
```

Pola URL: `https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/<slug>/images/<file>`

### Aturan #2: simpan file gambar di `images/` dalam folder artikel

Taruh gambar di `posts/<slug>/images/`, commit bareng artikelnya. Begitu ke-push, file langsung bisa diakses via URL raw di atas. Beri nama yang jelas (`arsitektur-evm.png`, bukan `IMG_2931.png`).

### Aturan #3: host gambar yang diizinkan (untuk `cover` & `authorAvatar`)

`cover` dan `authorAvatar` dioptimasi lewat next/image, jadi host-nya **harus** termasuk daftar ini (kalau tidak, gambar ditolak / tidak muncul):

- `raw.githubusercontent.com` dan `*.githubusercontent.com` ← **rekomendasi**, host di repo ini
- `images.unsplash.com` (foto stok gratis)
- `i.imgur.com`
- `bccukdw.xyz` / `www.bccukdw.xyz`

> Gambar **inline** (`![](...)`) tidak lewat next/image, jadi sebenarnya bebas host — tapi tetap **selalu pakai URL absolut**. Demi konsisten & awet, simpan saja di `images/` repo ini.

### Tips gambar
- `cover`: rasio landscape, lebar ≥1200px (dipakai sebagai hero lebar penuh + preview share).
- Selalu isi **alt text** yang deskriptif di `![alt text](...)` — buat aksesibilitas & SEO.
- Kompres gambar sebelum commit (mis. [squoosh.app](https://squoosh.app)) biar repo tidak berat.

## 5. Markdown yang didukung

GitHub-Flavored Markdown penuh: heading (`##`), list, tabel, `> quote`, **bold**, _italic_, link, dan code block dengan syntax highlighting:

````markdown
```solidity
contract Hello { }
```
````

Heading (`##`, `###`) otomatis dapat anchor link — pakai itu untuk struktur, jangan `#` (H1 dipakai judul).
