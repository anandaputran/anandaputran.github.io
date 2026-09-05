# Ananda Putra Nugraha — Personal Portfolio

[English Version](README.md)

Personal portfolio yang dibangun ulang dari awal sebagai bagian dari proses pengembangan saya di bidang Web Development dan Frontend Development.

## Gambaran Proyek

Portfolio ini merupakan rebuild dari personal portfolio saya sebelumnya, yang awalnya dibuat sebagai proyek pembelajaran menggunakan template berbasis Bootstrap yang dimodifikasi. Versi tersebut membantu saya belajar menyusun struktur dan melakukan kustomisasi pada sebuah website portfolio, tetapi seiring waktu arah visual dan implementasinya sudah tidak lagi merepresentasikan posisi saya saat ini secara profesional.

Ketika kemampuan dan arah karier saya mulai lebih terfokus pada Web Development dan Frontend Development, saya memilih membangun ulang portfolio ini daripada terus memodifikasi versi sebelumnya. Saya melihat portfolio lama sebagai versi beta, sedangkan proyek ini menjadi iterasi yang lebih terarah dan stabil untuk merepresentasikan kemampuan, proyek, serta arah profesional saya saat ini.

Website ini dibangun dari awal menggunakan HTML, CSS, dan JavaScript. AI-assisted development digunakan selama proses sebagai teman diskusi, debugging, dan refinement. Arah desain, pilihan implementasi, pengujian, serta keputusan akhirnya tetap menjadi bagian dari proses pengembangan yang saya jalani sendiri.

## Arah Desain

Arah visual portfolio ini berangkat dari tujuan yang sederhana: membuat tampilan yang fresh, sederhana, elegan, dan profesional tanpa terasa kaku atau terlalu “programmer-like.”

Saya tetap ingin website ini memiliki karakter teknologi yang jelas, tetapi tanpa bergantung pada visual cliché seperti animasi bergaya Matrix, background berisi kode, atau efek yang berlebihan. Tujuannya adalah menjaga interface tetap modern dan menarik secara visual, sekaligus mudah didekati oleh audiens nonteknis seperti recruiter, pemilik bisnis, maupun calon kolaborator.

Arah tersebut kemudian berkembang menjadi konsep yang saya sebut *Calm Tech + Crafted Details*: fondasi yang tenang dan profesional, kemudian diperkuat dengan detail visual, interaksi, dan depth yang digunakan secara selektif untuk memberi karakter tanpa mengalahkan konten.

## Design System

Design system dikembangkan secara bertahap untuk menjaga konsistensi tanpa memaksa semua elemen terlihat sama. Fondasinya dibangun dari empat bagian utama: typography, shape, color, dan depth.

**DM Sans** digunakan sebagai typeface utama untuk memberikan tampilan yang bersih dan modern sekaligus menjaga keterbacaan pada berbagai ukuran layar.

**Shape** ditentukan berdasarkan fungsi, bukan dengan menerapkan satu nilai border radius ke semua elemen. Card, featured surface, navigation element, button, dan tag memiliki tingkat rounding yang berbeda untuk membangun hierarchy tanpa kehilangan bahasa visual yang konsisten.

**Color** dibangun menggunakan dark neutral palette yang terbatas. Primary text, secondary information, border, metadata, dan surface menggunakan tingkat kontras yang berbeda untuk membangun hierarchy tanpa menambahkan variasi warna yang sebenarnya tidak diperlukan.

**Depth dan surface** juga digunakan secara selektif. Tidak semua elemen perlu terlihat terangkat; beberapa bagian sengaja dibiarkan flat, sementara surface penting dan elemen interaktif mendapatkan layering, highlight, atau shadow yang halus. Pendekatan ini membantu menjaga visual hierarchy dan mendukung prinsip bahwa **jika semuanya dibuat terangkat, tidak ada lagi yang benar-benar terasa terangkat.**

## Interaksi & Crafted Details

Filosofi interaction mengikuti arah visual yang sama: sesuatu tidak harus ramai atau kompleks untuk terasa polished. Tampilan yang tenang dan sederhana tetap dapat menarik secara visual ketika detailnya dibuat dengan sengaja dan dieksekusi dengan baik.

Interaction digunakan untuk mengomunikasikan intent, bukan sekadar menambahkan movement. Button, link, navigation, dan elemen actionable lainnya memberikan visual feedback yang halus, sementara elemen informasional sengaja dibiarkan statis ketika interaction justru dapat memberi kesan keliru bahwa elemen tersebut bisa diklik.

Crafted details diperlakukan sebagai aksen, bukan dekorasi yang diterapkan ke seluruh interface. Subtle surface highlight, depth pada primary action, respons pada logo, dan visual cue kecil digunakan secara selektif untuk memberi karakter tanpa bersaing dengan konten.

Accessibility juga dipertimbangkan melalui visible focus state dan dukungan terhadap reduced-motion preference, sehingga interaction feedback tetap berguna tanpa mengharuskan penggunaan animasi yang tidak diperlukan.

> **Movement harus mengonfirmasi intent, bukan bersaing mencari perhatian.**
>
> **Crafted detail adalah aksen, bukan dekorasi massal.**

## Pendekatan Responsive

Responsive design diperlakukan sebagai kemampuan untuk beradaptasi, bukan sekadar mengikuti ukuran layar yang tersedia. Layout diperbolehkan berubah ketika diperlukan selama visual hierarchy, usability, dan karakter desainnya tetap terjaga pada desktop, tablet, maupun mobile.

## Dukungan Bilingual

Portfolio mendukung Bahasa Inggris dan Bahasa Indonesia agar kontennya dapat diakses oleh audiens yang lebih luas. Pergantian bahasa ditangani melalui sistem translation JavaScript yang ringan menggunakan atribut `data-i18n`, sementara bahasa yang dipilih disimpan secara lokal agar preferensi pengguna tetap dipertahankan ketika kembali mengunjungi website.

## Tech Stack & Struktur Proyek

Portfolio ini sengaja dibangun menggunakan teknologi fundamental web: HTML, CSS, dan JavaScript. Keputusan tersebut bukan didasarkan pada kompleksitas proyek, melainkan pada keinginan untuk memperkuat pemahaman saya terhadap fondasi di balik modern web development sebelum menambahkan abstraction atau framework pada level yang lebih tinggi.

Membangun dari fundamental juga memberi saya kontrol langsung terhadap document structure, responsive styling, interaction, dan application behavior. Dengan begitu, setiap keputusan implementasi dapat saya pahami, bukan sekadar tersembunyi di balik layer tooling tambahan.

### Core Stack

- **HTML5** — semantic structure dan content
- **CSS3** — visual system, responsive layout, interaction states, dan accessibility preferences
- **JavaScript** — mobile navigation dan bilingual functionality
- **DM Sans** — typography
- **Git & GitHub** — version control
- **GitHub Pages** — deployment

### Struktur Proyek

```text
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── icons/
│   ├── img/
│   │   ├── certificates/
│   │   └── projects/
│   └── js/
│       └── main.js
├── data/
│   ├── translations.js
│   ├── projects.js
│   └── certificates.js
└── index.html
```

Struktur proyek sengaja dijaga tetap sederhana agar setiap concern mudah ditemukan dan dipahami. Style, script, media asset, dan translation data dipisahkan ke direktori masing-masing, sementara struktur halaman utama tetap berada di `index.html`.

> `projects.js` dan `certificates.js` saat ini masih disiapkan sebagai placeholder untuk kemungkinan pemisahan data di masa mendatang dan belum menjadi bagian dari active rendering logic pada v1.

## Proses Pengembangan

Proses pengembangan berfokus pada belajar melalui iterasi, bukan menghasilkan seluruh website sekaligus. Setiap area utama didiskusikan, diimplementasikan, diuji, direview, lalu dijadikan checkpoint sebelum berpindah ke tahap berikutnya.

AI-assisted development digunakan sepanjang proses sebagai learning dan problem-solving partner, terutama untuk mendiskusikan pendekatan implementasi, mereview kode, melakukan debugging, serta mengevaluasi keputusan desain. Alih-alih mengandalkan one-shot generation, perubahan diterapkan secara bertahap agar saya dapat memahami reasoning dan behavior di balik implementasinya.

Alur yang digunakan secara umum adalah:

**Discuss → Implement → Test → Review → Refine → Lock → Continue**

Pendekatan ini memang membutuhkan waktu lebih lama dibanding menghasilkan solusi lengkap dari satu prompt. Namun tujuan proyek ini bukan hanya menghasilkan portfolio yang selesai, melainkan juga memperkuat fundamental di balik pekerjaan tersebut serta membangun proses development yang dapat saya pahami, jelaskan, dan terus kembangkan secara mandiri.

## Pelajaran yang Didapat

Salah satu pelajaran terbesar selama membangun ulang portfolio ini adalah bahwa frontend yang baik bukan sekadar tentang menambahkan lebih banyak kode, efek, atau teknologi. Banyak keputusan menjadi lebih baik ketika saya memahami alasan sebuah elemen dibuat, bagaimana elemen tersebut seharusnya berperilaku, dan kapan sesuatu justru lebih baik dibiarkan sederhana.

Saya juga belajar bahwa konsistensi bukan berarti membuat semuanya identik. Visual hierarchy dapat muncul dari perbedaan shape, contrast, depth, dan interaction selama perbedaan tersebut memiliki tujuan yang jelas. Hal yang sama berlaku pada responsive design: kemampuan layout untuk beradaptasi lebih penting daripada sekadar mengecilkannya agar muat pada layar lain.

Pelajaran penting lainnya adalah menguji sebuah keputusan daripada memperlakukan rekomendasi sebagai aturan. Nilai atau implementasi yang disarankan dapat menjadi starting point yang berguna, tetapi keputusan akhir seharusnya lahir dari memahami alasannya, mengujinya dalam konteks yang sebenarnya, lalu membandingkan hasilnya.

Yang paling penting, proyek ini semakin memperkuat alasan saya untuk terus memperdalam fundamental. Tools, framework, dan AI dapat mempercepat development, tetapi memahami HTML, CSS, dan JavaScript yang mendasarinya memberi saya fondasi untuk menentukan bagaimana dan kapan tools tersebut sebaiknya digunakan.

## Status Proyek & Roadmap

Portfolio saat ini sedang mendekati stable release pertamanya. Core structure, responsive layout, bilingual support, visual system, interaction, dan crafted details telah selesai dibangun dan didokumentasikan.

Sebelum release pertama, pekerjaan yang tersisa berfokus pada:

- Final visual dan content polish
- Cleanup kode dan asset
- Cross-device dan interaction QA
- Performance optimization
- Review SEO dan metadata

Setelah v1 dirilis, portfolio akan terus berkembang ketika proyek, sertifikasi, dan kemampuan baru sudah siap untuk ditampilkan. Penambahan berikutnya akan diperlakukan sebagai update, bukan blocker untuk initial release.

**Status saat ini: Documentation Catch-up → Final Polish → Cleanup / QA → Performance & SEO → v1 Release**
