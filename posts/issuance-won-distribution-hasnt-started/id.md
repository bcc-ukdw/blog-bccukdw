---
title: "Issuance Menang. Distribution Belum Dimulai."
date: "2026-07-02"
author: "Shenhan01-sys"
authorName: "Hans Gunawan"
authorAvatar: "https://github.com/Shenhan01-sys.png"
category: "Blockchain"
tags: ["rwa", "tokenisasi", "distribusi", "onchain-finance", "mantle", "defi"]
excerpt: "Aset dunia nyata ter-tokenisasi sudah jadi pasar multi-miliar dolar, tapi angka headline mencampur aduk issuance dengan distribution. RWA terbesar di Bumi nggak bisa dipindah, kebanyakan token diam, dan distribution layer adalah satu-satunya moat yang nggak bisa dibeli. Catatan riset untuk Mantle Research Challenge."
cover: "https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png"
---

> Catatan riset tentang jurang antara penerbitan aset ter-tokenisasi dan distribusi global — dan kenapa distribution layer adalah satu-satunya moat yang nggak bisa dibeli. Submission untuk Mantle Research Challenge. Juli 2026.

## Abstrak

Aset dunia nyata ter-tokenisasi (RWA) sudah tumbuh jadi pasar multi-miliar dolar, namun angka headline mencampur aduk *issuance* (aset ditaruh di ledger) dengan *distribution* (aset yang benar-benar bergerak, diperdagangkan, dan ter-compose). Berdasarkan framework Distributed-vs-Represented terbaru RWA.xyz, dua studi peer-reviewed (arXiv:2508.11651; 2606.01131), dan data onchain Mantle (2 Jul 2026), catatan ini berargumen bahwa issuance sudah sukses sementara distribution nyaris belum dimulai: RWA tunggal terbesar (~$19.4B) nggak bisa dipindah, kebanyakan aset ter-tokenisasi turnover-nya rendah, dan di Mantle jurang ~10x memisahkan pemegang stablecoin eksisting dari pemegang RWA aktual. Tesis empat pilar Mantle — settlement, compliance, liquidity, distribution — menempatkan distribution sebagai satu-satunya pilar yang nggak bisa dibeli, karena ia network effect. Catatan ini menyimpulkan bahwa siapa pun yang meng-compound distribution layer duluan merebut posisi pembuka dalam reshaping ~$127T onchain finance, dan merinci next move konkret yang dibutuhkan.

## Key Findings

1. **Aset RWA terbesar di Bumi tidak terdistribusi.** Token HELOC Figure (~$19.4B) ada di peringkat #1 RWA.xyz — tapi berstatus "Represented": terkunci di platform penerbit, nggak bisa ditransfer peer-to-peer, nggak bisa di-compose dengan DeFi. Headline "$XX miliar RWA" menutupi bahwa mayoritas nilainya nggak bisa bergerak. ([RWA.xyz, 2 Jul 2026](https://app.rwa.xyz); [blog framework RWA.xyz](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

2. **Issuance sukses; distribution belum — secara empiris.** Dua studi peer-reviewed menemukan kebanyakan token RWA volume trading rendah, holding period lama, partisipasi tipis, *meski* potensi pasar global 24/7. Tokenisasi lebih sukses mendigitalkan aset yang sudah likuid (Treasuries, MMF) daripada membuka likuiditas aset illiquid (real estate, seni). ([arXiv:2508.11651, Agu 2025](https://arxiv.org/html/2508.11651v1); [arXiv:2606.01131, Mei 2026](https://arxiv.org/abs/2606.01131); >$25B onchain per Investax)

3. **Di Mantle, jurang sisi permintaan ~10x.** $229.9M nilai RWA terdistribusi di 3.276 pemegang RWA — versus ~31.000 pemegang stablecoin di chain yang sama. RWA Q1 2026 naik 27% ke $247.5M (Messari), tapi volume transfer RWA 30-hari turun 55% ke $6.5M. Issuance naik; distribution menipis. ([RWA.xyz Mantle, 2 Jul 2026](https://app.rwa.xyz/networks/mantle); [PR Newswire/Messari, Q1 2026](https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html))

4. **Breadth ≠ depth — paradoks xStocks.** xStocks (Backed × Bybit) adalah pemimpin distribusi global: 8 dari 11 tokenized equity teratas berdasar unique holder, 68% dari top 25 (pertengahan Feb 2026). Tapi di Mantle cuma $3.9M — 1.66% RWA Mantle. Terdaftar di mana-mana ≠ likuid di mana pun. ([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle); data holder via laporan sekunder)

5. **Moat yang nggak bisa dibeli.** Mantle membingkai jurang ~$127T onchain finance dalam empat pilar — settlement, compliance, liquidity, **distribution**. Tiga bisa dibeli/dibangun; distribution adalah network effect (users + liquidity + venues) yang nggak bisa dibeli. Siapa meng-compound network effect itu memenangkan distribution layer — dan, masuk akal, fase berikut onchain finance. ([ETHNews, 28 Mei 2026](https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance) — melaporkan framing Mantle)

![Gambar 1 — Hantu $19.4B: RWA #1 TIDAK terdistribusi](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig1_distributed_vs_represented.png)
*Gambar 1 — Hantu $19.4B: RWA #1 TIDAK terdistribusi (framework Distributed vs Represented).*
## 1. Tesis: Issuance ≠ Adoption

Setiap siklus bull RWA, cerita sama: headline soal "$XX miliar ter-tokenisasi," gelombang peluncuran fund, lalu flattening. Siklus 2025–26 yang pertama di mana bottleneck bukan lagi issuance. BlackRock, Franklin Templeton, Ondo, Securitize, Figure, Circle, Backed, dan DTCC sudah buktikan aset *bisa* ditaruh di ledger. U.S. Treasuries ter-tokenisasi tembus $14B April 2026 — naik 37x dari awal 2023. ([Cryptonews, Apr 2026](https://cryptonews.net/news/finance/32756007))

Masalah yang lebih sulit adalah yang nggak bisa dibeli siapa pun: **memindahkan aset itu dari issuance ke pasar global yang likuid, composable, di mana aset benar-benar berperilaku seperti instrumen finansial — priced, tradable, bisa jadi kolateral, redeemable, dan terjangkau investor lintas batas dan venue.** Itu distribution. Dan distribution, beda dengan issuance, adalah network effect.

Catatan ini berargumen tiga hal. Pertama, metrik RWA favorit pasar — total nilai ter-tokenisasi — sistematis melebih-lebihkan progress karena mencampur *issuance* dengan *distribution*. Kedua, bukti sudah nunjukin issuance menang dan distribution mandek. Ketiga, distribution layer karena itu adalah moat yang nggak bisa dibeli dari onchain finance — dan positioning Mantle sebagai "liquidity chain" dengan demand eksisting (users, stablecoin, yield venue) adalah taruhan kredibel — sekalipun belum selesai — tepat ke moat itu.

## 2. Friction Map: Kenapa Distribution Bagian Sulit

Kalau issuance adalah masalah yang institusi well-funded bisa selesaikan pakai lawyer dan platform tokenisasi, distribution adalah masalah koordinasi yang nggak bisa diselesaikan satu institusi sendirian. Empat friksi mengakumulasi:

**2.1 Mobility & transferability.** Banyak "aset ter-tokenisasi" sebenarnya nggak bisa dipindah. Mereka diam di ledger penerbit, whitelist ke partisipan institusi, nggak bisa ditransfer peer-to-peer. RWA.xyz kini membagi pasar di sumbu ini — **Distributed Assets** (bisa dipindah ke wallet eksternal, transferable, composable) versus **Represented Assets** (cuma recordkeeping, nggak movable). Perbedaannya bukan kosmetik: mobility yang membuka composability dengan DeFi, yang mengubah token dari baris database jadi primitive finansial.

**2.2 Depth likuiditas per venue.** Aset bisa *terdaftar* di enam chain dan tetap illiquid di semua. Distribution bukan breadth (berapa tempat list token) — tapi depth (di mana kamu benar-benar bisa trade size tanpa slippage, dan siapa yang market-make). Ini jurang antara "tersedia" dan "usable."

**2.3 Jangkauan regulatori & cross-border.** Aset ter-tokenisasi mewarisi patchwork yurisdiksi sekuritas underlyer. Whitelist, eligibility, transfer restriction, dan rails KYC/AML berarti token yang diterbitkan global sering hanya menjangkau sebagian investor global. Pernyataan SEC Januari 2026 tentang tokenized securities menegaskan banyak representasi onchain berada *di luar* master securityholder file — intermediasi legal, bukan cuma plumbing teknis, yang mengatur distribution. ([SEC, 28 Jan 2026](https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities))

**2.4 Saluran sisi permintaan & redemption.** Issuance selesaikan "bisa eksis." Distribution selesaikan "siapa pegang, kenapa, dan bisa keluar?" Tanpa app retail-facing, yield venue, market maker, dan jalur redemption kredibel, aset ter-tokenisasi jadi holding diam — pola persis yang dokumen literatur akademik di bawah.

Poin penyatu: **issuance adalah milestone sisi supply; distribution adalah sistem sisi demand.** Kamu bisa launch fund dalam satu kuartal. Kamu nggak bisa beli pasar likuid, cross-border, composable dalam satu kuartal.
## 3. Bukti: Apa yang Berjalan dan Apa yang Tidak

### 3.1 Aset hantu $19.4B — dan kenapa metrik headline berbohong

Per 2 Juli 2026, aset RWA tunggal terbesar di RWA.xyz adalah token HELOC Figure sekitar **$19.4B** — lebih besar dari BUIDL BlackRock, lebih besar dari fund Treasury ter-tokenisasi mana pun. Dan berstatus **Represented**: nggak bisa dipindah ke wallet di luar platform Figure atau ditransfer peer-to-peer. Dalam istilah distribution, ia hantu — angka besar yang nggak beredar.

Ini kenapa framework Distributed-vs-Represented RWA.xyz penting. Ia membingkai ulang pasar di sekitar satu-satunya metrik yang prediksi utility nyata: *bisakah token bergerak dan ter-compose?* Di bawah view "Distributed" default, ukuran pasar headline mengecil — bukan karena pasar kontraksi, tapi karena volume recordkeeping institusi immovable akhirnya dikecualikan dari angka distribution "nyata". Observasi framework sendiri: banyak Represented Assets diharapkan *berevolusi* jadi Distributed Assets saat regulasi jelas — Figure sendiri sedang berusaha buat token-nya DeFi-compatible. ([framework RWA.xyz](https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented))

**Implikasi:** analisis apa pun yang kutip "total nilai RWA" tanpa memisahkan Distributed dari Represented sedang mengukur issuance, bukan distribution. Pasar distribution sesungguhnya jauh lebih kecil — dan jauh lebih penting — daripada headline.

### 3.2 "Issuance menang. Distribution belum dimulai." — bukti akademik

Kasus empiris kini terdokumentasi, bukan sekadar asumsi. *"Tokenize Everything, But Can You Sell It?"* (arXiv:2508.11651, Agu 2025) menemukan **kebanyakan token RWA volume trading rendah, holding period lama, partisipasi investor terbatas**, meski potensi pasar 24/7 — aktivitas transfer rendah, active address terbatas, secondary trading minimal di real estate ter-tokenisasi, private credit, bahkan fund Treasury. Tindak lanjut, *"Tokenized but Illiquid?"* (arXiv:2606.01131, Mei 2026), mengkonfirmasi **nilai aset outstanding sendiri nggak andal prediksi likuiditas terobservasi**, dan token gold-backed (holder base luas, aktivitas persisten) outperform banyak produk Treasury dan private credit di penggunaan onchain aktual. Investax merangkum temuan sama tajam: >$25B dibawa onchain, kebanyakan masih inactive di pasar sekunder.

Pola konsisten dan nggak nyaman: **tokenisasi sukses mendigitalkan aset yang sudah likuid (Treasuries, MMF) dan gagal membuka likuiditas aset yang belum (real estate, seni).** Dengan kata lain, issuance terus menang sementara hadiah lebih sulit — distribution — nyaris belum dimulai.

### 3.3 Paradoks distribution Mantle: 3.276 vs 31.000

Di Mantle sendiri (RWA.xyz, 2 Jul 2026), jurang sisi permintaan terlihat dan besar:

| Metrik (Mantle, 2 Jul 2026) | Nilai | Tren 30-hari |
|---|---|---|
| Nilai RWA terdistribusi | $229.9M | ▼ 8.47% |
| Pemegang RWA | 3.276 | ▲ 2.15% |
| Volume transfer RWA 30-hari | $6.5M | ▼ 55.30% |
| Jumlah aset RWA | 163 | — |
| Pemegang stablecoin (chain sama) | ~31.000 | ▲ 0.02% |

League table didominasi partner issuance — Securitize $106.7M (45%), Chainlink CCIP $90.6M (38%), Ondo $28.7M (12%) — sementara xStocks, produk paling *distribution-native* (159 tokenized equity), cuma $3.9M (1.66%). ([RWA.xyz Mantle](https://app.rwa.xyz/networks/mantle))

![Gambar 2 — League table RWA Mantle: partner issuance dominan, distribution-native tipis](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig2_mantle_league.png)
*Gambar 2 — League table RWA Mantle: partner issuance dominan, distribution-native tipis.*

![Gambar 3 — Paradoks distribution Mantle: basis permintaan underpenetrated ~10x](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig3_holder_gap.png)
*Gambar 3 — Paradoks distribution Mantle: basis permintaan underpenetrated ~10x (pemegang stablecoin vs RWA).*

Dibacakan bersama laporan Q1 2026 Messari — nilai RWA Mantle **+27% ke $247.5M**, melebar ke fixed income, equity, ETF, dan institutional lending yield — gambarnya paradoksal tapi terbaca: **issuance mengakumulasi, sementara aktivitas distribution 30-hari berkontraksi.** Lebih banyak nilai ditaruh onchain; lebih sedikit yang bergerak. Dan ~31.000 pemegang stablecoin eksisting Mantle representeri basis permintaan **underpenetrated ~10x** yang belum dijangkau produk RWA. Itu bukan kegagalan supply — itu masalah distribution by definition.

### 3.4 Paradoks xStocks: breadth global, depth $3.9M

xStocks (Backed × Bybit, didistribusi onchain termasuk Mantle) bisa dibilang cerita distribution terkuat di tokenized equity: pertengahan Februari 2026 ia pegang **8 dari 11 tokenized equity teratas berdasar unique holder count dan 68% dari top 25** — penggunaan nyata dan berulang, lewat fase eksperimen. Tapi di Mantle ia cuma **$3.9M**, 1.66% RWA Mantle, dan di tabel nilai 30-hari Mantle-nya turun 11%.

Pelajaran presisi dan generalizable: **breadth distribution (banyak holder, banyak chain) bukan depth distribution (likuiditas per venue).** Aset bisa jadi pemimpin global berdasar jangkauan dan tetap illiquid di chain mana pun yang kekurangan market maker, yield venue, dan insentif untuk konsentrasi likuiditas. Ini jurang yang stack distribution Mantle eksplisit coba tutup — venue Fluxion LP dan program insentif xPoints + 1M Fluxion points ada tepat untuk konversi breadth jadi depth di Mantle.

![Gambar 4 — Paradoks xStocks: breadth global (68% top-25) vs depth Mantle ($3.9M, 1.66%)](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/issuance-won-distribution-hasnt-started/images/fig4_xstocks_paradox.png)
*Gambar 4 — Paradoks xStocks: breadth global (68% top-25) vs depth Mantle ($3.9M, 1.66%).*
## 4. Distribution Edge Mantle — Moat yang Nggak Bisa Dibeli

Mantle membingkai opportunity onchain finance sebagai jurang ~$127T lintas empat pilar: **settlement, compliance, liquidity, dan distribution**. Tiga tractable pakai modal dan engineering. Settlement membaik dengan ZK validity proof dan finality lebih cepat. Compliance soal rails, whitelist, dan kemitraan. Liquidity bisa di-seed — insentif, program market-making, deployment treasury. **Distribution beda: ia network effect**, produk dari mengakumulasi users, venue, dan habit dari waktu. Kamu nggak bisa tulis cek untuk "basis investor global yang sudah pakai chain-mu untuk hold dan gerakkan value."

Ini kenapa footprint sisi permintaan Mantle yang eksisting adalah aset strategis yang menarik, bukan partnership issuance-nya:

- **Basis permintaan captive.** ~31.000 pemegang stablecoin dan stack likuiditas native dalam (USDT0, restaking mETH/cmETH, FBTC) berarti Mantle sudah host sisi permintaan yang produk RWA di tempat lain harus bangun dari nol. Jurang 10x antara pemegang stablecoin dan pemegang RWA, dalam istilah moat, adalah *headroom*, bukan defisit.
- **Kontinyuitas banking-ke-distribution.** UR — app banking smart-money Mantle (spend, off-ramp, on-ramp dalam satu tempat) — adalah permukaan distribution untuk user nyata, bukan cuma rail custody. Tesis "blockchain for banking" secara mekanis adalah tesis distribution: app banking tempat demand hidup.
- **Layer yield + venue yang buat aset usable.** Merchant Moe, AGNI, Treehouse, dan Fluxion ubah token terdaftar jadi primitive tradable, yield-bearing, LP-able — konversi breadth gaya xStocks jadi depth. Program xPoints + Fluxion points adalah insentif depth likuiditas eksplisit, bukan insentif listing.
- **Partnership issuance sebagai colokan supply.** Bybit × Backed (xStocks, equity AS), Securitize, Ondo, Agora, Chainlink CCIP — league table RWA Mantle nunjukin supply sudah dicolok. Supply bagian mudah. Moat-nya apakah sistem sisi permintaan mengakumulasi.

Cara paling jelas nyatain tesis: **settlement, compliance, dan liquidity adalah biaya; distribution adalah ekuitas.** Taruhan Mantle adalah bahwa punya distribution layer — users, venue, dan composability yang buat token *berperilaku* seperti uang — bernilai lebih dari punya partnership issuance tunggal mana pun.

## 5. Risiko & Pertanyaan Terbuka

Tesis distribution kredibel nggak bisa jadi press release. Bukti kontra nyata:

- **Kontraksi 30-hari bisa signal, bukan noise.** Nilai RWA terdistribusi Mantle turun 8.47% dan volume transfer 55% dalam 30 hari (per 2 Jul 2026). Kalau tren persist lewat Q2, framing "headroom" melemah dan framing "distribution mandek" menguat. Satu kuartal bukan vonis — tapi ini metrik yang diawasi.
- **Depth xStocks di Mantle saat ini tipis.** $3.9M (1.66%) untuk pemimpin distribution global adalah peringatan bahwa listing ≠ likuiditas. Program insentif harus demonstratif konversi breadth ke depth, atau paradoks mengeras.
- **Langit-langit regulatori.** Pernyataan SEC Januari 2026 membuat banyak representasi onchain secara legal downstream dari master securityholder file. Nggak ada amount infrastruktur distribution yang override yurisdiksi yang bilang token nggak konvey hak sekuritas. Langit-langit distribution sebagian di-set di luar chain.
- **Network effect potong dua arah.** Kalau venue likuiditas lebih tinggi (L2 kompetitor, hibrid CEX-DeFi, atau pilot tokenisasi DTCC Juli 2026 sendiri dengan BlackRock dan Goldman) mengakumulasi distribution lebih cepat, headroom Mantle menguap. Network effect reward leader, bukan early.
- **Represented ≠ kegagalan.** Recordkeeping institusi adalah use case legit dan besar. Distingsi Distributed-vs-Represented harus menajamkan analisis, bukan jadi judgment nilai bahwa semua aset Represented "hantu." Banyak yang akan, dan seharusnya, tetap Represented.
## 6. Kesimpulan — Langkah Berikut

Issuance menang. Fund ada, rail ada, headline ada. Distribution belum dimulai — belum di depth, belum lintas batas, belum sebagai primitive finansial composable, redeemable, likuid. Catatan akademik bilang begitu (arXiv:2508.11651; 2606.01131). Struktur pasar bilang begitu (split Distributed-vs-Represented RWA.xyz, di mana aset #1 berdasar nilai adalah hantu $19.4B non-movable). Dan data Mantle sendiri bilang begitu, pelan: issuance naik 27% dalam se kuartal, distribution 30-hari turun dua digit, jurang 10x antara orang yang sudah di chain dan orang yang benar-benar pegang aset ter-tokenisasi-nya.

Langkah berikut bukan partnership issuance lain. Ini kerja distribution yang nggak glamour, mengakumulasi: ubah breadth jadi depth (likuiditas xStocks di Mantle), ubah holder jadi user (rute ~31.000 pemegang stablecoin ke RWA via UR dan yield venue), dan ubah token jadi primitive (composability, kolateral, redemption) supaya "ter-tokenisasi" akhirnya berarti "tradable". Tiga dari empat pilar bisa dibeli. Distribution yang harus *dibangun* — dan yang, sekali dibangun, nggak bisa dibeli balik.

Itu moat-nya. Itu tesisnya. Dan siapa pun yang bangun distribution layer duluan nggak cuma menang research challenge Mantle — ia ambil posisi pembuka di reshaping $127T onchain finance.

---

## Referensi

1. RWA.xyz — halaman network Mantle (data per 2 Jul 2026): nilai aset terdistribusi, pemegang, volume transfer, league table. https://app.rwa.xyz/networks/mantle
2. RWA.xyz — "A New Framework for Tokenized Assets: Distributed & Represented" (Nov 2025). https://rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented
3. "Tokenize Everything, But Can You Sell It? RWA Liquidity Challenges and the Road Ahead," arXiv:2508.11651v1 (Agu 2025). https://arxiv.org/html/2508.11651v1
4. "Tokenized but Illiquid? Evidence from Real-World Asset Markets," arXiv:2606.01131 (Mei 2026). https://arxiv.org/abs/2606.01131
5. Investax — "What Is Real-World Asset (RWA) Tokenization? A Full Guide for 2026" (Mei 2026; >$25B onchain; aktivitas pasar sekunder rendah). https://investax.io/blog/what-is-real-world-asset-rwa-tokenization
6. PR Newswire / Messari — "Mantle Posts 27% RWA Growth in Q1 2026, Reaching $247.5M" (Jun 2026). https://www.prnewswire.com/news-releases/mantle-posts-27-rwa-growth-in-q1-2026--reaching-247-5m-according-to-messari-302795234.html
7. PR Newswire — "Mantle Collaborates with Bybit and Backed to Bring U.S. Equities Onchain" (Nov 2025). https://www.prnewswire.com/news-releases/mantle-collaborates-with-bybit-and-backed-to-bring-us-equities-onchain-pioneering-next-trillion-dollar-wave-of-tokenized-assets-302608743.html
8. ETHNews — "Mantle Identifies a $127 Trillion Gap in Onchain Finance" (28 Mei 2026; framing empat pilar: settlement, compliance, liquidity, distribution). https://ethnews.com/home/mantle-identifies-a-127-trillion-gap-in-onchain-finance
9. SEC — "Statement on Tokenized Securities" (28 Jan 2026). https://sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
10. Cryptonews — "Tokenized U.S. Treasuries hit $14B" (Apr 2026; 37x dari awal 2023). https://cryptonews.net/news/finance/32756007
11. Mantle — "Mantle Launches UR (Early Contributors' Access Live)" (18 Jun 2025); blog group.mantle.xyz. https://group.mantle.xyz/blog/announcements/mantle-launches-crypto-first-neobank-ur — stack distribution: USDT0, mETH/cmETH, FBTC, Merchant Moe, AGNI, Treehouse, Fluxion; xPoints + 1M Fluxion points.

## Disclaimer

Bukan nasihat finansial. Opini riset pribadi disiapkan untuk Mantle Research Challenge oleh Hans Gunawan (BCC UKDW). Angka RWA.xyz point-in-time (2 Jul 2026) dan bisa berubah. Angka ~$127T dan framing empat pilar dilaporkan ETHNews sebagai positioning Mantle; sumber primer Mantle eksak nggak ditemukan independen dan harus diverifikasi ke blog/letter Mantle sendiri sebelum publikasi formal. Verifikasi semua angka onchain ke sumber live sebelum submission.
