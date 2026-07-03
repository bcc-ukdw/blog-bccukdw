---
title: "926 Wallet, Satu Pintu: Anatomi On-Chain Pasar Saham Tokenisasi di Mantle"
date: "2026-07-03"
author: "yeheskieltame"
authorName: "Yeheskiel Yunus Tame"
authorAvatar: "https://github.com/yeheskieltame.png"
category: "Blockchain"
tags: ["rwa", "mantle", "saham-tokenisasi", "data-onchain", "distribusi", "dune"]
excerpt: "Seluruh holder dari 368 saham tokenisasi di Mantle direkonstruksi dari log mentah dengan aritmetika integer eksak: 88% masuk lewat satu gerbang Bybit selama empat minggu, 98,3% di antaranya masih memegang asetnya, dan tepat satu token yang benar-benar terdistribusi. Forensik on-chain lengkap dengan setiap klaim tertaut ke query publik."
cover: "https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/cover.png"
---

*Saya merekonstruksi seluruh holder dari 368 saham tokenisasi di Mantle, dengan aritmetika integer eksak, langsung dari log mentah. 88% dari mereka masuk melalui satu gerbang yang hanya terbuka empat minggu. Ini kisah tentang siapa yang membuka pintu itu, mengapa para pembelinya tidak pernah pergi, dan di mana gelombang berikutnya sedang menunggu.*

**Setiap klaim dalam tulisan ini bisa Anda verifikasi sebelum membacanya:**

- **Dashboard live, 13 query publik:** https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- **Agent pelacak open-source dan temuan lengkap:** https://github.com/yeheskieltame/mantle-rwa-distribution-tracker

Riset ini berjalan di atas pelacak otomatis: agent open-source yang memeriksa ulang angka live setiap hari terhadap ambang yang ditetapkan di muka. Pada run multi-token pertamanya, agent ini menangkap sendiri akhir ceritanya: menandai NVDAx sebagai xStock pertama dan satu-satunya di Mantle yang melewati kedua ambang distribusi. Semua yang ada di bawah tertaut ke query atau dokumen yang membuktikannya.

*Data per 2 Juli 2026. Bukan nasihat keuangan.*

![Riset dalam satu pandangan: grid kartu statistik menunjukkan 368 diterbitkan berbanding 1 terdistribusi, jendela empat minggu 88%, retensi 98,3%, 926 holder, 421 wallet baru, tanggal gerbang 10 April, dan celah pengukuran NULL.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-glance.png)
*Riset dalam satu pandangan. Setiap angka diukur on-chain dan tertaut ke query publik di bagian-bagian di bawah.*

---

## Grafik yang tidak pernah dibuat orang

Ada satu grafik yang tidak pernah ditampilkan headline RWA. Ambil seluruh 368 saham tokenisasi Amerika yang diterbitkan Backed lewat xStocks di Mantle, rekonstruksi saldo setiap wallet dari log Transfer mentah, lalu hitung holder unik per minggu sejak peluncuran.

Garisnya melakukan tiga hal. Merangkak: tiga sampai enam holder di tiga setengah bulan pertama. Meledak: 816 wallet holder baru antara 13 April dan 10 Mei 2026, dengan 353 dalam satu minggu saja. Lalu mendatar: satu sampai sebelas holder baru per minggu sejak itu, dan totalnya 926 hari ini.

Satu jendela empat minggu menciptakan 88% dari seluruh holder saham tokenisasi yang pernah dimiliki Mantle ([query tren 7865851](https://dune.com/queries/7865851)).

![Figur 1: grafik garis total holder xStock dengan jendela Bybit disorot, plus bar holder pertama mingguan dan kartu ringkasan statistik.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-trend.png)
*Figur 1. Pertumbuhan holder, Desember 2025 sampai Juli 2026. Penanda adalah pengumuman Bybit 10 April; pita berwarna adalah jendela empat minggu yang menghasilkan 88% dari seluruh holder. Sumber: query Dune 7865851.*

Lonjakan seperti itu bukan adopsi organik. Itu adalah pintu yang terbuka. Maka saya mencari pintunya.

## Langkah pasarnya: Mantle memenangkan sisi suplai

Pertama, apresiasi untuk bagian yang memang benar di headline. Dalam dua kuartal, Mantle menjadi venue penerbitan saham tokenisasi yang serius:

- TVL RWA tumbuh 27,4% QoQ menjadi $247,5 juta di Q1 2026, digerakkan oleh syrupUSDT dari Maple, index fund MI4, dan xStocks ([Messari via Chainwire, 9 Juni 2026](https://chainwire.org/2026/06/09/mantle-posts-27-rwa-growth-in-q1-2026-reaching-247-5m-according-to-messari/)).
- SpaceX tokenisasi (SPCXx) hadir di Mantle pada hari yang sama SpaceX menuntaskan IPO terbesar dalam sejarah, bisa diperdagangkan di Fluxion dan Merchant Moe, dijamin 1:1, dengan penentuan harga langsung dari penerbit ([Chainwire, 12 Juni 2026](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/)).
- ETF USPX dari Franklin Templeton hadir on-chain via xStocks, salah satu ETF tokenisasi pertama dari manajer aset TradFi papan atas di Ethereum L2 mana pun ([PR Newswire](https://www.prnewswire.com/news-releases/mantle-becomes-one-of-the-first-ethereum-l2s-to-bring-franklin-templetons-uspx-etf-on-chain-with-xstocks-302808048.html)).

Penerbit memilih venue seperti CFO memilih bank, dan kredibilitas institusional Mantle (treasury DAO terbesar di dunia, relasi bursa yang dalam) memenangkan kompetisi itu. Suplai pun mengikuti.

Namun suplai adalah keputusan penerbit. Distribusi adalah vonis yang dijatuhkan pasar. Maka alih-alih mengutip TVL, saya mengukur vonisnya.

## Metode: hitung holder, bukan headline

Saya membangun ulang saldo setiap wallet yang pernah menyentuh salah satu dari 368 xStocks di Mantle, dari event Transfer di `mantle.logs` mentah, dengan aritmetika integer 256-bit eksak (`decimal(38,0)`: tanpa pembulatan floating-point, tanpa ambang debu, saldo nol berarti benar-benar nol). Cakupan datanya dari genesis Mantle (2 Juli 2023) sampai tanggal snapshot. Saya validasi silang dengan API Routescan: angka konsentrasi cocok sampai desimalnya, dan jumlah holder live selisih di bawah 3% (data live memang beberapa jam lebih segar).

Semuanya publik dan bisa dijalankan ulang:

- Dashboard live dengan 13 query berparameter: https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- Agent pelacak open-source yang memeriksa ulang angkanya setiap hari dan mengirim alert saat ambang terlewati: https://github.com/yeheskieltame/mantle-rwa-distribution-tracker

Enam temuan keluar dari sana, dan bersama-sama semuanya menjelaskan grafik tadi.

## Temuan 1: 368 diterbitkan, 1 terdistribusi

Tetapkan ambang yang falsifiable sebelum melihat datanya: sebuah token dianggap terdistribusi bila punya lebih dari 500 holder dan wallet terbesarnya memegang kurang dari 75% suplai.

- Tepat satu dari 368 xStocks yang lolos: NVDAx, dengan 612 holder dan wallet teratas 74,55% ([league 7863671](https://dune.com/queries/7863671)).
- Hanya 15 dari 368 (4,1%) yang punya sepuluh holder saja ([ringkasan 7863679](https://dune.com/queries/7863679)).
- xStock median punya satu sampai tiga holder: diterbitkan, tidak diadopsi.

![Figur 2: kartu funnel menunjukkan 368 diterbitkan, 15 dengan sedikitnya sepuluh holder, 1 benar-benar terdistribusi.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-funnel.png)
*Figur 2. Funnel adopsi di seluruh 368 xStocks. Sumber: query Dune 7863671 dan 7863679.*

Peringkat lengkapnya memperlihatkan jurangnya. Setelah NVDAx, TSLAx, dan CRCLx, jumlah holder runtuh ke dua bahkan satu digit:

![Figur 3: peringkat bar horizontal sepuluh xStock teratas berdasarkan jumlah holder eksak, dengan porsi wallet teratas dan vonis untuk masing-masing.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-league.png)
*Figur 3. Sepuluh teratas dari 368 xStocks berdasarkan holder eksak. Sisanya, 358 token, masing-masing punya kurang dari 15 holder. Sumber: query Dune 7863671.*

Sang unggulan justru mempertajam poinnya. SpaceX tokenisasi punya 26 holder. Wallet penerbitnya masih memegang 99,2% suplai; external float hanya 0,8% setelah tiga minggu diperdagangkan ([konsentrasi 7863618](https://dune.com/queries/7863618)). Seluruh riwayat suplainya hanyalah satu mint 150.000 token dan satu burn 120.000 ([mint dan burn 7863661](https://dune.com/queries/7863661)). SPCXx juga mencatat 5.686 transfer dalam 21 hari, tetapi tidak pernah lebih dari sekitar 19 wallet penerima berbeda dalam sehari ([aktivitas 7863657](https://dune.com/queries/7863657)): jumlah transaksi di sana adalah churn arbitrase, bukan manusia. Metrik adopsi apa pun yang dibangun dari aktivitas atau TVL akan melebih-lebihkan kenyataan.

## Temuan 2: pintunya punya nama

Siapa yang membuka keran di bulan April? Bukti on-chain menjawabnya lewat tiga jalur independen.

**Sidik jarinya.** Transfer masuk kohort lonjakan itu didominasi panggilan `token.transfer()` langsung yang transaksinya diinisiasi pihak ketiga, bukan oleh wallet penerima. Itu tanda tangan penarikan dari bursa terpusat: bukan swap DEX, dan bukan airdrop, karena jumlahnya sangat bervariasi ([mekanisme 7866292](https://dune.com/queries/7866292)).

**Walletnya.** Satu hot wallet, `0x5888...836c`, mengantarkan xStock pertama ke 462 dari 816 wallet kohort, melintasi tujuh ticker, aktif setiap hari dari 13 April sampai 10 Mei, lalu berhenti. Wallet ini punya 2,76 juta transaksi seumur hidup di Mantle, dan tercantum dalam laporan Proof-of-Reserves Bybit untuk jaringan Mantle. Ini hot wallet Bybit di Mantle ([distributor 7866312](https://dune.com/queries/7866312); [Bybit PoR](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf)).

**Tanggalnya.** Pada 10 April 2026, Mantle, Bybit, dan Backed mengumumkan integrasi xStocks, dengan Bybit membuka setoran dan penarikan xStocks di jaringan Mantle ([pengumuman Bybit](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/); [The Block](https://www.theblock.co/post/378030/bybit-backed-xstocks-tokenized-nvidia-mstr-mantle)). Gelombang on-chain dimulai Senin pertama setelahnya.

![Figur 4: tiga kartu bukti (sidik jari, wallet, tanggal) di atas strip hari-per-hari yang menunjukkan hot wallet aktif setiap hari selama jendela, lalu berhenti.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-gateway.png)
*Figur 4. Ringkasan atribusi. Strip hari pengiriman adalah aktivitas hot wallet dari 1 April sampai 24 Mei: kosong, lalu menyala setiap hari selama jendela, lalu kosong lagi. Sumber: query Dune 7866292 dan 7866312, Bybit PoR.*

Maka seluruh misteri basis holder RWA Mantle terurai menjadi satu kalimat: orang-orang membeli saham tokenisasi di Bybit dan menariknya ke Mantle selama empat minggu, lalu momennya berlalu. Bahkan tercapainya ambang oleh NVDAx, satu-satunya kisah sukses distribusi ekosistem ini, terjadi di dalam jendela tersebut.

## Temuan 3: pembelinya bertahan, funnel-nya tidak

Retensi: 802 dari 816 wallet kohort jendela Bybit, alias 98,3%, masih memegang xStocks-nya hari ini ([retensi 7866325](https://dune.com/queries/7866325)). Mereka bukan pemburu reward yang buang barang lalu pergi. Mereka investor beli-dan-simpan yang datang untuk produknya.

Sekarang kontras yang mengubah ini menjadi strategi. Pada bulan Juni, peluncuran SPCXx dibarengi kampanye Project X dari Merchant Moe, sampai 100.000 MNT reward untuk penyedia likuiditas ([Chainwire](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/)). Kampanye itu membeli kedalaman pool dan churn perdagangan. Holder barunya nyaris nol; holder pertama se-ekosistem bertahan di satu digit sampai belasan setiap minggu di bulan Juni ([tren 7865851](https://dune.com/queries/7865851)). Gerbang CEX tanpa insentif menghasilkan 816 holder yang bertahan di angka 98,3%.

Ekosistem Mantle sedang membayar untuk likuiditas, sementara satu-satunya kanal akuisisi holder yang terbukti justru berjalan tanpa pengawalan.

![Figur 5: gauge retensi 98,3% untuk kohort jendela Bybit di samping tangki suplai yang menunjukkan 99,2% SPCXx masih di wallet penerbit.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-retention.png)
*Figur 5. Kiri: retensi kohort jendela Bybit, delapan minggu kemudian. Kanan: konsentrasi suplai SPCXx setelah tiga minggu dan kampanye LP 100.000 MNT. Sumber: query Dune 7866325, 7863618, 7863661, 7863657.*

## Temuan 4: saham tokenisasi memang mengakuisisi user nyata, hanya belum cukup banyak

Mengklasifikasikan seluruh 923 wallet holder eksternal saat ini berdasarkan riwayat on-chain penuhnya (cakupan dari genesis Mantle, kontrak ditandai via `creation_traces`):

| Asal wallet | Wallet | Porsi |
|---|---|---|
| User lama Mantle (median 459 hari di Mantle sebelum xStock pertama) | 458 | 49,6% |
| Tiba di Mantle bersama xStock pertamanya | 421 | 45,6% |
| Kontrak (pool DEX atau vault) | 30 | 3,3% |
| Penerima pasif (tidak pernah menginisiasi transaksi) | 14 | 1,5% |

Dua implikasi. Pertama, saham tokenisasi adalah produk akuisisi user yang sungguhan: hampir separuh holder adalah wallet yang muncul justru untuk RWA-nya. Kedua, 421 wallet baru dalam tujuh bulan adalah keseluruhan hasil akuisisinya. Sebagai pembanding skala: Indonesia sendiri punya sekitar 26 juta investor saham ritel.

![Figur 6: diagram donat asal holder, 45,6% tiba di Mantle bersama xStock pertamanya, dengan kartu legenda untuk tiap kelompok.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-origin.png)
*Figur 6. Dari mana 923 wallet holder saat ini berasal. Sumber: query Dune 7865842.*

## Temuan 5: ekosistemnya bahkan belum bisa mengukur likuiditas RWA-nya sendiri

Saat membangun dashboard, saya menabrak tiga celah pengukuran yang layak disebut, karena merekalah yang menyembunyikan masalah yang didokumentasikan artikel ini:

- SPCXx hanya diperdagangkan di satu venue yang terindeks (Merchant Moe: 418 trade, memuncak 208 per minggu lalu melapuk ke sekitar 42).
- Fluxion, DEX fokus RWA milik Mantle dan venue eksekusi resmi dalam pengumuman Mantle sendiri, sama sekali tidak terindeks di spellbook `dex.trades` Dune.
- xStocks tidak ada di price oracle DEX, sehingga `amount_usd` mengembalikan NULL: likuiditas USD saham tokenisasi di Mantle tidak bisa diukur dengan tooling standar ([DEX 7863658](https://dune.com/queries/7863658)).

Builder tidak bisa mengoptimalkan apa yang tidak bisa mereka lihat. Sampai Fluxion terindeks dan xStocks punya harga, bahkan Mantle pun tidak bisa mengutip likuiditas produk RWA unggulannya dalam dolar.

## Temuan 6: kerangkanya menangkap keberhasilan secara otomatis

Riset ini dikirim bersama agent pelacak open-source (Python, hanya standard library, sehingga mahasiswa bisa menjalankannya tanpa menginstal apa pun). Setiap hari ia menarik data holder live dari API Routescan dengan paginasi eksak, memeriksa ambang falsifiable, memvalidasi silang Dune dengan chain live, menulis digest, dan menembakkan alert webhook saat ambang terlewati. Ia berjalan gratis di GitHub Actions, dan jalur alert-nya teruji end-to-end.

Pada run multi-token pertamanya (2 Juli 2026, 11:40 UTC), ia menandai: wallet teratas NVDAx 74,553%, di bawah ambang 75%, dan 629 holder live, di atas 500. xStock pertama di Mantle yang menjadi terdistribusi, terdeteksi oleh kriteria yang ditetapkan sebelum jawabannya diketahui ([digest agent, di-commit oleh CI](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/agent/reports/2026-07-02.md)).

Seperti itulah wujud "distribusi menjadi KPI" dalam praktik: ambang didaftarkan di muka, pelanggarannya terdeteksi otomatis, buktinya on-chain.

## Yang sebaiknya Mantle lakukan berikutnya

Setiap rekomendasi datang bersama alasannya dan buktinya.

![Figur 7: empat kartu playbook, tiap rekomendasi dipasangkan dengan angka on-chain yang mendukungnya.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-playbook.png)
*Figur 7. Playbook: empat langkah, masing-masing didukung angka yang diukur on-chain dalam studi ini.*

**1. Jadikan gerbang CEX selalu menyala, bukan hanya di hari peluncuran.**
Alasan: satu-satunya funnel yang pernah menghasilkan holder dalam skala di Mantle adalah penarikan CEX ke chain, dan ia hanya berjalan selama momen peluncurannya. Dengan bukti saat ini, setiap minggu gerbang aktif bernilai kira-kira 200 sampai 350 holder yang bertahan.
Bukti: 88% dari seluruh holder tiba 13 April sampai 10 Mei ([7865851](https://dune.com/queries/7865851)); pengirimannya datang dari hot wallet Bybit di Mantle ([7866312](https://dune.com/queries/7866312); [Bybit PoR](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf)); jendelanya terbuka tepat setelah pengumuman 10 April ([Bybit](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/)); pertumbuhan sesudahnya satu sampai sebelas wallet per minggu.

**2. Danai akuisisi holder pertama, bukan hanya likuiditas.**
Alasan: dua eksperimen yang sudah dijalankan ekosistem menunjuk ke arah yang sama. User gerbang tidak butuh insentif dan 98,3% masih bertahan; kampanye LP 100.000 MNT membeli churn, bukan holder. Anggaran mengikuti apa yang diukur.
Bukti: retensi 802 dari 816 ([7866325](https://dune.com/queries/7866325)); profil churn SPCXx ([7863657](https://dune.com/queries/7863657), [7863618](https://dune.com/queries/7863618)); tren holder nyaris datar sepanjang bulan kampanye ([7865851](https://dune.com/queries/7865851)).

**3. Perbaiki tumpukan pengukuran.**
Alasan: Temuan 5. Venue unggulannya tak terlihat oleh analitik standar dan likuiditas saham tokenisasi tidak bisa dikutip dalam USD.
Bukti: cakupan `dex.trades` dan `amount_usd` yang NULL ([7863658](https://dune.com/queries/7863658)).

**4. Lacak external float dan jumlah holder, bukan TVL atau suplai.**
Alasan: suplai adalah keputusan penerbit (satu mint, satu burn), sehingga KPI sisi suplai mengukur penerbit, bukan pasar. Metrik distribusi bersifat falsifiable, murah dipantau terus-menerus, dan sudah menangkap satu-satunya keberhasilan sejati secara real time.
Bukti: [7863661](https://dune.com/queries/7863661), [7863645](https://dune.com/queries/7863645), dan digest agent di atas.

## Apa yang terjadi berikutnya: prakiraan yang falsifiable

- **Distribusi menjadi KPI yang dilaporkan.** Setelah analisis satu-token VM Crypta dan analisis se-ekosistem ini, jumlah holder dan external float mulai muncul di samping TVL dalam pelaporan ekosistem. Dashboard saya sudah melacak ambang-ambangnya terus-menerus.
- **Gerbangnya menjadi disengaja, atau pasarnya tetap datar.** Jika Mantle dan Bybit menjalankan kampanye gerbang berulang, nantikan lompatan-lompatan seperti April; jika tidak, nantikan pertumbuhan satu digit per minggu terus berlanjut. Apa pun itu, query tren akan memperlihatkannya.
- **Katalis regulasi yang harus diawasi adalah OJK.** Pengawasan kripto Indonesia telah terkonsolidasi di bawah OJK, dan sekuritas asing tokenisasi berada di wilayah abu-abu antara aturan pasar modal dan aset kripto. Sikap OJK yang jelas, bahkan sekadar sandbox, akan menjadi pembuka terbesar untuk distribusi lokal yang patuh; sampai saat itu, aksesnya lewat bursa global, dan justru karena itulah rel Bybit penting.
- **Asia Tenggara menentukan siapa yang memenangkan jalur ritel.** Prakiraan yang saya ikut bertaruh di dalamnya, di bawah ini.

## Gelombang berikutnya sedang berdiri di depan pintu

Inilah yang membuat angka retensi 98,3% itu strategis, bukan sekadar trivia: model gerbangnya bekerja, user yang dihasilkannya bertahan, dan pasar terbesar yang belum tergarap oleh gerbang itu adalah pasar tempat Bybit sudah beroperasi.

Indonesia punya 26,7 juta investor pasar modal ([OJK, Mei 2026](https://www.bareksa.com/berita/saham/2026-05-20/ojk-sebut-jumlah-investor-pasar-modal-capai-267-juta-54-berusia-di-bawah-30-tahun)), sekitar 54% di antaranya di bawah 30 tahun, dengan kira-kira 80% pendatang baru berusia di bawah 30 ([data KSEI dan IDX](https://databoks.katadata.co.id/pasar/statistik/69e049f4a9230/investor-muda-mendominasi-pasar-modal-indonesia-awal-2026)). Indonesia juga punya 21,7 juta pengguna kripto terdaftar, kini diregulasi langsung oleh OJK ([OJK, April 2026](https://www.viva.co.id/gaya-hidup/digilife/1907455-investor-kripto-indonesia-tembus-217-juta-orang)). Bagi jutaan anak muda Indonesia, akun kripto hadir lebih dulu daripada akun sekuritas, dan saham yang benar-benar mereka bicarakan adalah Nvidia, Tesla, dan kini SpaceX. Yang menghalangi mereka dari saham Amerika adalah semua hal yang justru dihapus tokenisasi: konversi USD, KYC broker asing, biaya yang menelan posisi $20, dan jam pasar 21:30 sampai 04:00 waktu setempat.

![Figur 8: lingkaran proporsional membandingkan 26,7 juta investor pasar modal Indonesia dan 21,7 juta pengguna kripto dengan 926 wallet pemegang xStocks di Mantle hari ini.](https://raw.githubusercontent.com/bcc-ukdw/blog-bccukdw/main/posts/926-wallets-one-door/images/fig-indonesia.png)
*Figur 8. Skala kolam permintaannya: seluruh basis holder saham tokenisasi Mantle hanyalah satu titik kecil di hadapan populasi investor Indonesia. Sumber: OJK, KSEI; holder dari query Dune 7865851.*

Pipa dari "mahasiswa Indonesia dengan akun Bybit" menuju "holder saham tokenisasi di Mantle" sudah ada. Saya menyaksikannya memindahkan 816 orang dalam empat minggu tanpa sepatah pun pemasaran berbahasa Indonesia di belakangnya. Versi yang disengaja, edukasi terlokalisasi, program kampus, on-ramp IDR lewat bursa berizin, belum punya pemain lama. Siapa pun yang menjalankannya lebih dulu mengambil jalurnya; dan risiko-risiko yang jujur (saham tokenisasi adalah eksposur harga tanpa hak pemegang saham, sikap OJK atas sekuritas asing tokenisasi belum tuntas, wallet kecil membawa keluasan bukan kedalaman) tempatnya di kurikulum, bukan di catatan kaki.

Mantle membangun sisi suplai dan membuktikan, selama empat minggu di bulan April, bahwa sisi permintaan datang ketika seseorang membuka pintunya. Lapisan distribusi membutuhkan para distributor. Saya menulis ini dari kampus tempat mereka berkumpul setiap minggu.

---

## Reproduksi semuanya

- **Dashboard live** (seluruh temuan sebagai panel interaktif, dengan pemilih token untuk xStock mana pun): https://dune.com/yeheskiel/mantle-rwa-distribution-tracker
- **Repositori** (SQL persis untuk 13 query, agent pelacak, workflow CI, temuan lengkap dengan catatan metode dan caveat): https://github.com/yeheskieltame/mantle-rwa-distribution-tracker
- **Dokumen temuan** (versi bukti panjang dari artikel ini): [FINDINGS.md](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/FINDINGS.md)

Semuanya terbuka untuk diadopsi ekosistem: fork query-nya untuk keluarga token apa pun di chain mana pun yang diindeks Dune, arahkan webhook agent-nya ke kanal alert ekosistem, atau angkat metrik external float dan ambangnya langsung ke pelaporan resmi. Itulah gunanya memublikasikan tooling-nya, bukan hanya kesimpulannya.

Bukti klaim-per-klaim:

| Klaim dalam artikel ini | Sumber publik |
|---|---|
| 368 xStocks diterbitkan; 15 dengan 10+ holder; 1 terdistribusi | Dune [7863671](https://dune.com/queries/7863671), [7863679](https://dune.com/queries/7863679) |
| 926 holder; 88% diakuisisi 13 Apr sampai 10 Mei; satu digit sesudahnya | Dune [7865851](https://dune.com/queries/7865851) |
| Mekanisme masuk = transfer langsung pihak ketiga (penarikan CEX) | Dune [7866292](https://dune.com/queries/7866292) |
| Hot wallet Bybit mengirim ke 462 dari 816 wallet kohort | Dune [7866312](https://dune.com/queries/7866312), [Bybit PoR](https://www.bybit.com/common-static/cht-static/por/Bybit_PoR_Audit_2026_Feb_26.pdf) |
| Integrasi diumumkan 10 April 2026 | [Bybit](https://announcements.bybit.com/en/article/bybit-now-supports-xstocks-deposits-and-withdrawals-on-mantle-bltd6af69aacd874633/), [The Block](https://www.theblock.co/post/378030/bybit-backed-xstocks-tokenized-nvidia-mstr-mantle) |
| Retensi kohort 98,3% (802 dari 816) | Dune [7866325](https://dune.com/queries/7866325) |
| Pembagian asal holder (45,6% tiba bersama xStock pertama, median umur 459 hari) | Dune [7865842](https://dune.com/queries/7865842) |
| SPCXx: 26 holder, 99,2% penerbit, float 0,8%, satu mint dan satu burn | Dune [7863618](https://dune.com/queries/7863618), [7863645](https://dune.com/queries/7863645), [7863661](https://dune.com/queries/7863661) |
| Aktivitas SPCXx adalah churn (5.686 transfer, maksimum 19 penerima/hari) | Dune [7863657](https://dune.com/queries/7863657) |
| Fluxion tak terindeks; volume USD xStock tak terukur | Dune [7863658](https://dune.com/queries/7863658) |
| Project X, sampai 100.000 MNT reward LP | [Chainwire, 12 Jun 2026](https://chainwire.org/2026/06/12/mantle-and-xstocks-bring-tokenized-spacex-spcxx-to-fluxion-merchant-moe-as-historys-largest-ipo-goes-live/) |
| Pelanggaran ambang NVDAx terdeteksi otomatis | [Digest agent via CI](https://github.com/yeheskieltame/mantle-rwa-distribution-tracker/blob/main/agent/reports/2026-07-02.md) |
| TVL RWA +27,4% QoQ menjadi $247,5 juta | [Messari via Chainwire](https://chainwire.org/2026/06/09/mantle-posts-27-rwa-growth-in-q1-2026-reaching-247-5m-according-to-messari/) |
| Indonesia: 26,7 juta investor, 54% di bawah 30; 21,7 juta pengguna kripto | [OJK/Bareksa](https://www.bareksa.com/berita/saham/2026-05-20/ojk-sebut-jumlah-investor-pasar-modal-capai-267-juta-54-berusia-di-bawah-30-tahun), [KSEI/Databoks](https://databoks.katadata.co.id/pasar/statistik/69e049f4a9230/investor-muda-mendominasi-pasar-modal-indonesia-awal-2026), [OJK/Viva](https://www.viva.co.id/gaya-hidup/digilife/1907455-investor-kripto-indonesia-tembus-217-juta-orang) |

Karya pendahulu: ["The 99.54% Problem"](https://paragraph.com/@vmcrypta/the-9954percent-problem-spcxx-and-the-distribution-gap-in-mantles-rwa-thesis) dari VM Crypta (16 Juni 2026) mendokumentasikan konsentrasi SPCXx lebih dulu; studi ini memperluas pertanyaannya ke seluruh ekosistem 368 token, mengatribusikan permintaan yang memang ada, dan mengukur retensinya.

*Pengungkapan. Saya memimpin komunitas blockchain kampus di Indonesia dan membangun OwnaFarm, proyek RWA di Mantle, sehingga saya punya kepentingan di ekosistem yang dianalisis tulisan ini. Risetnya sendiri adalah karya independen untuk Mantle Research Challenge, dan dibangun untuk diperiksa alih-alih dipercaya: setiap angka tertaut ke query publik yang bisa dijalankan ulang, dan agent pelacak yang menghasilkan hasil pemantauannya open source. Tidak ada satu pun bagian dari tulisan ini yang merupakan nasihat keuangan.*

---

*Bacaan pendamping dari club: [Issuance Won. Distribution Hasn't Started.](https://blog.bccukdw.xyz/issuance-won-distribution-hasnt-started), kerangka makro dari tesis yang sama yang diukur tulisan ini pada level wallet.*
