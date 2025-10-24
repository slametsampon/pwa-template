# 🧱 PWA-Template

**PWA-Template** merupakan kerangka kerja (_template_) modern berbasis arsitektur **Progressive Web App (PWA)** yang dibangun menggunakan **Lit**, **Tailwind CSS**, dan **esbuild**, serta dilengkapi dengan sistem caching pintar berbasis **Workbox** dan **IndexedDB (via idb)**.
Template ini dirancang untuk membantu pengembang membangun aplikasi web yang:

- **Cepat** (⚡ _instant load_)
- **Dapat diinstal** seperti aplikasi native 📱
- **Berfungsi offline penuh** 💾
- **Mudah dideploy** ke berbagai platform, termasuk **GitHub Pages**.

---

## 🚀 Tujuan Proyek

PWA-Template bertujuan untuk:

- Menyediakan _boilerplate_ PWA siap pakai untuk aplikasi offline-first.
- Menghadirkan arsitektur modular berbasis **App Shell** agar startup time cepat.
- Mempermudah integrasi **IndexedDB caching layer** untuk menyimpan data API offline.
- Menstandarkan workflow build modern menggunakan **esbuild** dan **Tailwind CSS**.
- Mendukung proses **auto-deploy** ke **GitHub Pages** via **GitHub Actions**.

---

## 🧩 Teknologi yang Digunakan

| Teknologi               | Deskripsi                                                                    |
| ----------------------- | ---------------------------------------------------------------------------- |
| **Lit**                 | Library ringan untuk membangun Web Components modular dan reaktif.           |
| **Tailwind CSS**        | Framework CSS berbasis utility untuk styling cepat dan konsisten.            |
| **esbuild**             | Bundler super cepat yang digunakan untuk proses build dan optimisasi aset.   |
| **Workbox**             | Toolkit PWA dari Google untuk manajemen caching dan service worker otomatis. |
| **IndexedDB (via idb)** | Penyimpanan lokal untuk caching data API agar tetap dapat diakses offline.   |
| **Vaadin Router**       | Router ringan untuk navigasi SPA berbasis client-side.                       |
| **GitHub Actions**      | CI/CD pipeline otomatis untuk build dan deploy ke GitHub Pages.              |
| **GitHub Pages**        | Hosting statis untuk mendistribusikan aplikasi PWA kamu ke publik.           |

---

## 🗂️ Struktur Proyek

```
pwa-template/
├── frontend/
│   ├── src/
│   │   ├── components/        # Komponen UI berbasis Lit
│   │   ├── layout/            # App shell: header, footer, navigasi
│   │   ├── pages/             # Halaman (home, about, dashboard, dll)
│   │   ├── utils/             # cacheStore.ts, apiClient.ts, helper
│   │   ├── pwa/               # manifest.webmanifest, offline.html, icons
│   │   ├── style.css          # Entry point Tailwind CSS
│   │   └── main.ts            # Entry utama aplikasi
│   ├── esbuild.config.js      # Konfigurasi build utama
│   └── pwa/
│       └── generate-sw.js     # Generator service worker (Workbox)
├── build/                     # Output hasil build siap deploy
├── .github/workflows/         # GitHub Actions (deploy.yml)
└── README.md
```

---

## 🧪 Fitur Utama

- ⚡ **App Shell Architecture** — UI utama (header, footer, router) dimuat instan dari cache.
- 📦 **Service Worker otomatis (Workbox)** — caching file statis dan offline fallback.
- 💾 **IndexedDB Layer (`idb`)** — menyimpan hasil API agar data tetap bisa diakses offline.
- 🌐 **Offline-First** — berfungsi penuh tanpa koneksi internet.
- 📱 **Installable (PWA Manifest)** — dapat dipasang di desktop/mobile tanpa App Store.
- 🔄 **Auto-update** — versi baru langsung aktif tanpa reload manual.
- 🧱 **Lit Components + Tailwind** — modular, efisien, dan mudah dikustom.
- 🚀 **CI/CD GitHub Pages** — otomatis build dan deploy setiap push ke branch `master`.

---

## 🧠 Arsitektur PWA

```
┌────────────────────────────┐
│ Service Worker (Workbox)   │  → Caches HTML, JS, CSS, Icons
└─────────────┬──────────────┘
              │
              ▼
     ┌──────────────────────┐
     │ IndexedDB (via idb)  │  → Caches API data, user state, offline forms
     └──────────────────────┘
              │
              ▼
       ┌─────────────┐
       │ fetchWithCache │
       └─────────────┘
              │
       ┌─────────────┐
       │ Lit Components │
       └─────────────┘
```

Arsitektur ini memastikan:

- **App Shell** selalu dimuat dari cache (super cepat)
- **Data API** tetap tersedia walau offline
- **Sinkronisasi otomatis** saat koneksi kembali

---

## 📦 Instalasi & Menjalankan

```bash
# 1. Clone repository
$ git clone https://github.com/USERNAME/pwa-template.git
$ cd pwa-template

# 2. Instal dependensi
$ npm ci

# 3. Jalankan aplikasi secara lokal
$ npm run dev

# 4. Build untuk produksi
$ npm run build:frontend
```

Aplikasi akan tersedia di `http://localhost:51451` (atau port sesuai konfigurasi dev server).

---

## ☁️ Deployment Otomatis ke GitHub Pages

PWA-Template menggunakan **GitHub Actions** (`.github/workflows/deploy.yml`) untuk otomatisasi build dan publikasi ke branch `gh-pages`.

### Konfigurasi penting:

- Output build: `build/frontend`
- Branch publikasi: `gh-pages`
- Disertakan file `.nojekyll` agar GitHub Pages tidak salah mendeteksi struktur.
- Path aplikasi: `/pwa-template/`
  → Akses di: `https://<username>.github.io/pwa-template`

---

## 🧩 Contoh Komponen Utama

```ts
// frontend/src/components/layout/app-shell.ts

@customElement('app-shell')
export class AppShell extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <main>
        <app-main></app-main>
      </main>
      <app-footer></app-footer>
    `;
  }
}
```

### Service Worker Registration

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./pwa/service-worker.js')
        .then(() => console.log('✅ Service Worker registered'))
        .catch(console.error);
    });
  }
</script>
```

---

## 🧰 Modul Kunci

| Modul                      | Fungsi                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| **`generate-sw.js`**       | Membuat `service-worker.js` otomatis via Workbox, lengkap dengan runtime caching dan offline fallback. |
| **`cacheStore.ts`**        | Abstraksi penyimpanan data API dengan IndexedDB (`idb`), menyediakan `getCache` / `setCache` API.      |
| **`fetchWithCache`**       | Wrapper `fetch` dengan fallback otomatis ke cache jika offline.                                        |
| **`manifest.webmanifest`** | Metadata aplikasi agar bisa diinstall (ikon, nama, warna tema, start URL).                             |

---

## 🧭 Cara Kerja Offline

1. **Saat pertama kali dibuka**
   → App Shell + asset disimpan ke Cache Storage.
   → Data API disimpan ke IndexedDB.
2. **Saat offline**
   → File statis dilayani dari Cache.
   → Data diambil dari IndexedDB.
3. **Saat online lagi**
   → Cache diperbarui otomatis oleh Workbox.
   → Data API diperbarui dan disinkronkan kembali.

---

## 📚 Dokumentasi Tambahan

| Modul                      | Penjelasan                                                        |
| -------------------------- | ----------------------------------------------------------------- |
| `AuthService`              | Simulasi autentikasi berbasis token dan mode offline.             |
| `mqttContext`              | Menyediakan context MQTT untuk komunikasi realtime (opsional).    |
| `themeContext`             | Sistem tema gelap/terang berbasis localStorage dan media query.   |
| `pwa/manifest.webmanifest` | File metadata agar browser mengenali app sebagai installable PWA. |

---

## 🤝 Kontribusi

Kontribusi terbuka untuk:

- Penambahan fitur PWA (push notification, background sync)
- Optimalisasi caching strategy
- Peningkatan performa build dan UI
- Dokumentasi dan contoh implementasi baru

Silakan buat _Pull Request_ atau _Issue_ melalui repositori ini.

---

## ⚖️ Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

---

> Dibangun dengan ❤️ oleh komunitas pengembang web modern —
> untuk membantu menciptakan **web apps yang cepat, ringan, dan dapat diandalkan tanpa koneksi.**

> **Repo:** [github.com/slametsampon/pwa-template](https://github.com/slametsampon/pwa-template)

---
