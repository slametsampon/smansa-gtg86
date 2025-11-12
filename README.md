# 🎓 SMANSA-GTG86

Repositori ini merupakan proyek berbasis **Next.js (App Router)** yang ditujukan sebagai **platform dokumentasi digital alumni** SMAN 1 Genteng Angkatan 1986 (**SMANSA-GTG86**). Platform ini bersifat **ringan, modular, dan mudah dikembangkan**, cocok digunakan untuk:

* 📚 Menyusun dan membagikan artikel atau cerita alumni
* 🧠 Berbagi pengalaman hidup, karier, dan inspirasi
* 📸 Mendokumentasikan kegiatan reuni dan momen kebersamaan

Konten disusun dalam format **Markdown (MDX)** dan dikelola menggunakan **Contentlayer**, memudahkan penulisan tanpa perlu pengetahuan pemrograman.

Repositori: [https://github.com/[username]/smansa-gtg86](https://github.com/[username]/smansa-gtg86)

---

## ✨ Fitur Utama

* ⚡ Dibangun dengan Next.js + App Router (`/app`)
* 🎨 Styling modern menggunakan Tailwind CSS
* 📦 Konten fleksibel menggunakan format Markdown/MDX via Contentlayer
* 📂 Dua kanal utama: **Blog** (cerita, inspirasi) & **Reuni** (dokumentasi kegiatan)
* 🧠 Ditulis penuh dalam TypeScript
* 🌐 Siap dideploy ke GitHub Pages tanpa backend
* ✅ Ideal untuk komunitas alumni sekolah menengah

---

## 📁 Struktur Konten

Platform ini menyajikan dua kanal utama:

| Kanal | Path     | Deskripsi                                                |
| ----- | -------- | -------------------------------------------------------- |
| Blog  | `/blog`  | Artikel alumni (cerita sekolah, perjalanan hidup, opini) |
| Reuni | `/reuni` | Dokumentasi kegiatan reuni (narasi, foto, video, lokasi) |

Semua konten dapat ditulis dalam format `.mdx` dan diletakkan pada folder `content/`.

---

## 🛠️ Persyaratan Sistem

Pastikan Anda sudah menginstall:

* **Node.js** versi 18+
  👉 [https://nodejs.org](https://nodejs.org)
* **Git**
  👉 [https://git-scm.com](https://git-scm.com)

---

## 🚀 Setup Proyek (Lokal)

### 1. Clone repositori

```bash
git clone https://github.com/[username]/smansa-gtg86.git
cd smansa-gtg86
```

### 2. Install dependensi

```bash
npm install
```

### 3. Jalankan lokal

```bash
npm run dev
```

Buka browser di:

```
http://localhost:3000
```

### 4. Build untuk Produksi

```bash
npm run build
npm run start
```

---

## 🚢 Deploy ke GitHub Pages

### 1. Update `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/smansa-gtg86',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

> Gantilah `basePath` sesuai dengan nama repositori GitHub Anda.

### 2. Tambahkan script ke `package.json`

```json
"scripts": {
  "dev": "next dev",
  "build": "next build && next export",
  "start": "next start",
  "deploy": "npm run build && npx gh-pages -d out"
}
```

### 3. Install `gh-pages`

```bash
npm install gh-pages --save-dev
```

### 4. Jalankan Deploy

```bash
npm run deploy
```

### 5. Atur GitHub Pages

* GitHub > Settings > Pages
* Source: `gh-pages` branch
* Folder: `/ (root)`

Link deploy:

```
https://[username].github.io/smansa-gtg86
```

---

## 📁 Struktur Direktori

```
smansa-gtg86/
├── app/                      # Routing halaman (Next.js App Router)
├── components/               # Komponen UI (navbar, footer, dsb.)
├── content/
│   ├── blog/                 # Artikel alumni
│   ├── reuni/                # Dokumentasi kegiatan reuni
│   └── pages/                # Halaman statis seperti about.mdx
├── data/                     # Metadata situs (configurasi nama, footer, dll)
├── layouts/                  # Layout halaman blog & reuni
├── public/                   # Aset publik (gambar, logo, favicon)
├── .contentlayer/            # Output Contentlayer
├── out/                      # Output hasil export untuk GitHub Pages
├── tailwind.config.ts        # Konfigurasi Tailwind CSS
├── contentlayer.config.ts    # Struktur konten dan definisi MDX
├── next.config.js            # Konfigurasi Next.js
├── tsconfig.json             # Konfigurasi TypeScript
├── package.json              # Dependensi & script
└── README.md                 # Dokumentasi repositori
```

---

## 📦 Daftar Perintah Penting

| Perintah         | Deskripsi                                   |
| ---------------- | ------------------------------------------- |
| `npm install`    | Instalasi dependensi proyek                 |
| `npm run dev`    | Menjalankan proyek lokal (`localhost:3000`) |
| `npm run build`  | Membangun aplikasi untuk produksi           |
| `npm run start`  | Menjalankan hasil build                     |
| `npm run deploy` | Mendeploy ke GitHub Pages                   |

---

## ❓ FAQ

### 🔹 Kenapa struktur kontennya dibagi jadi Blog dan Reuni?

Agar dokumentasi lebih terstruktur:

* **Blog**: untuk tulisan umum, cerita, nostalgia, opini, dll.
* **Reuni**: khusus mendokumentasikan acara resmi atau tidak resmi alumni.

### 🔹 Apakah bisa menulis tanpa ngoding?

Ya. Cukup buat file `.mdx` dan letakkan di folder `content/blog/` atau `content/reuni/`. Tidak perlu menyentuh JavaScript atau Next.js.

---

## 🙌 Kontribusi

Semua alumni SMANSA-GTG86 diundang untuk berkontribusi. Langkahnya:

1. Fork repositori ini
2. Buat branch baru (`feature/nama-fitur`)
3. Tambahkan konten artikel atau dokumentasi
4. Buat Pull Request (PR)

---

## 📬 Kontak

Dikelola oleh: [@namakontak](https://github.com/[username])
Silakan gunakan [Issues](https://github.com/[username]/smansa-gtg86/issues) untuk pertanyaan, usulan, atau laporan bug.

---

Terima kasih telah mendukung SMANSA-GTG86!
Mari bersama-sama menjaga kenangan dan menjalin silaturahmi lintas waktu 🚀

