# SPA-Template

SPA-Template merupakan sebuah kerangka kerja (template) modern berbasis arsitektur **Single Page Application (SPA)** yang dibangun menggunakan **Lit**, **Tailwind CSS**, **esbuild**, dan didukung integrasi komponen seperti **Vaadin**, **context API**, serta sistem modular yang dapat diperluas. Template ini dirancang untuk membantu pengembang membangun aplikasi web interaktif dan responsif dengan struktur yang terorganisir dan dapat diskalakan.

---

## 🚀 Tujuan Proyek

SPA-Template bertujuan untuk:

- Menyediakan _boilerplate_ siap pakai untuk membangun SPA modern.
- Mengurangi waktu setup proyek dengan konfigurasi yang efisien.
- Menstandarkan struktur pengembangan berbasis komponen Lit dan manajemen tema/user context.
- Mendukung deployment otomatis melalui **GitHub Actions** ke **GitHub Pages**.

---

## 🧩 Teknologi yang Digunakan

| Teknologi          | Deskripsi                                                         |
| ------------------ | ----------------------------------------------------------------- |
| **Lit**            | Library ringan untuk membuat Web Component modern.                |
| **Tailwind CSS**   | Utility-first CSS framework untuk styling responsif dan cepat.    |
| **esbuild**        | Bundler super cepat yang digunakan untuk membangun file produksi. |
| **Vaadin**         | Komponen UI tambahan untuk pengalaman pengguna lebih kaya.        |
| **GitHub Pages**   | Platform hosting statis berbasis branch `gh-pages`.               |
| **GitHub Actions** | CI/CD pipeline untuk otomatisasi build dan deploy.                |

---

## 🗂️ Struktur Proyek

```
spa-template/
├── frontend/
│   ├── src/
│   │   ├── components/         # Komponen Web Lit
│   │   │   └── layout/         # app-shell, header, footer
│   │   ├── context/            # Theme dan user context
│   │   ├── pages/              # Halaman-halaman (about, dashboard, login, dll)
│   │   ├── services/           # AuthService, MQTT, dsb
│   │   ├── assets/             # Gambar, mock data
│   │   ├── style.css           # Entry point Tailwind
│   │   └── main.ts             # Entry point aplikasi
│   └── esbuild.config.js       # Konfigurasi build
├── build/                      # Output hasil build
├── .github/workflows/          # File GitHub Actions (deploy.yml)
└── README.md
```

---

## 🧪 Fitur Utama

- ✔️ Arsitektur SPA berbasis Web Components
- ✔️ Routing dinamis via `<app-main>`
- ✔️ Theming (dark/light mode) berbasis context
- ✔️ Autentikasi berbasis token (mocked AuthService)
- ✔️ Struktur modular dan dapat diperluas
- ✔️ Integrasi MQTT context (simulasi)
- ✔️ Responsive UI menggunakan Tailwind CSS
- ✔️ Deploy otomatis ke GitHub Pages

---

## 📦 Cara Instalasi & Menjalankan

```bash
# 1. Clone repository
$ git clone https://github.com/USERNAME/spa-template.git
$ cd spa-template

# 2. Instal dependensi
$ npm ci

# 3. Jalankan aplikasi secara lokal
$ npm run dev

# 4. Build untuk produksi
$ npm run build:frontend
```

Aplikasi akan dapat diakses di `http://localhost:3000` (atau sesuai konfigurasi lokal).

---

## ☁️ Deploy Otomatis via GitHub Actions

SPA-Template menggunakan `actions-gh-pages` untuk mengotomatisasi proses build dan deployment ke GitHub Pages.

### Konfigurasi Penting:

- Output build: `build/frontend`
- Branch publikasi: `gh-pages`
- File `.nojekyll` disertakan agar GitHub Pages tidak menganggap struktur seperti `_routes` sebagai file Jekyll.

Setiap push ke cabang `master` akan memicu workflow dan memperbarui halaman:
📍 `https://<username>.github.io/spa-template`

---

## 🛠️ Contoh Komponen Utama

```ts
// frontend/src/components/layout/app-shell.ts

@customElement('app-shell')
export class AppShell extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    `;
  }
}
```

---

## 📚 Dokumentasi Lanjutan

| Modul          | Penjelasan                                                         |
| -------------- | ------------------------------------------------------------------ |
| `AuthService`  | Simulasi autentikasi berbasis token via `localStorage`.            |
| `mqttContext`  | Menyediakan context MQTT global untuk digunakan antar-komponen.    |
| `themeContext` | Mengatur tema gelap/terang menggunakan localStorage & media query. |
| `app-main`     | Router internal yang menangani navigasi halaman dan SPA fallback.  |

---

## 🤝 Kontribusi

Kontribusi sangat terbuka untuk:

- Penambahan halaman baru
- Refactor komponen
- Perbaikan bug atau isu

Silakan buka _pull request_ atau _issue_ melalui halaman repo ini.

---

## ⚖️ Lisensi

Proyek ini dilisensikan di bawah MIT License.

---

> Dibangun dengan ❤️ oleh komunitas Lit dan Tailwind CSS Enthusiasts.

> **Repo:** [github.com - spa-template](https://github.com/slametsampon/spa-template)

---
