// frontend/src/pages/about.ts

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-about')
export class AboutPage extends LitElement {
  createRenderRoot() {
    return this; // gunakan light DOM agar Tailwind CSS global tetap aktif
  }

  render() {
    return html`
      <section class="p-6 md:p-10 max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold text-center text-green-700 mb-6">
          Tentang PWA-Template
        </h1>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          <span class="font-semibold text-green-600">PWA-Template</span> adalah
          sebuah kerangka kerja (_template_) berbasis
          <span class="font-semibold text-green-600">
            Progressive Web App (PWA)
          </span>
          yang dirancang untuk membangun aplikasi web
          <span class="font-semibold text-green-600">offline-first</span>, cepat
          diakses, dapat diinstal seperti aplikasi native, dan tetap ringan
          dijalankan di berbagai perangkat.
        </p>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Template ini memanfaatkan kombinasi teknologi modern seperti
          <span class="font-medium">Lit</span> untuk pengembangan berbasis
          komponen, <span class="font-medium">Tailwind CSS</span> untuk sistem
          styling responsif, serta <span class="font-medium">esbuild</span>
          untuk proses bundling super cepat. Integrasi
          <span class="font-medium">Workbox</span> dan
          <span class="font-medium">IndexedDB (idb)</span> menjadikan aplikasi
          mampu menyimpan antarmuka maupun data API secara lokal agar tetap
          dapat digunakan tanpa koneksi internet.
        </p>

        <h2 class="text-xl font-semibold text-green-700 mt-8 mb-4">
          Teknologi Inti
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">Frontend</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                Framework: <span class="font-medium">Lit Web Components</span>
              </li>
              <li>Styling: <span class="font-medium">Tailwind CSS</span></li>
              <li>Build Tool: <span class="font-medium">esbuild</span></li>
              <li>
                Arsitektur: <span class="font-medium">App Shell Model</span>
              </li>
              <li>Bahasa: <span class="font-medium">TypeScript</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">
              Integrasi PWA & Opsional
            </h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>
                Service Worker otomatis dengan
                <span class="font-medium">Workbox</span>
              </li>
              <li>
                Penyimpanan data offline via
                <span class="font-medium">IndexedDB (idb)</span>
              </li>
              <li>Dukungan MQTT over WebSocket (IoT ready)</li>
              <li>REST API backend (Fastify, Express, dll.)</li>
              <li>Kompatibel dengan hosting ringan seperti Raspberry Pi</li>
              <li>Deployment otomatis ke GitHub Pages, Netlify, dan Vercel</li>
            </ul>
          </div>
        </div>

        <h2 class="text-xl font-semibold text-green-700 mt-10 mb-4">
          Arsitektur App Shell & Offline-First
        </h2>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          PWA-Template mengimplementasikan
          <span class="font-semibold text-green-600"
            >App Shell Architecture</span
          >, di mana elemen statis seperti header, footer, dan router utama akan
          dicache secara permanen oleh Service Worker agar dapat dimuat secara
          instan bahkan tanpa koneksi internet. Sementara itu, data dinamis dari
          API disimpan menggunakan IndexedDB sehingga pengguna tetap dapat
          melihat informasi terakhir yang tersimpan.
        </p>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Pendekatan ini membuat aplikasi terasa cepat, andal, dan hemat
          bandwidth. Setiap kali koneksi kembali tersedia, sistem akan
          menyinkronkan data baru secara otomatis, menjaga pengalaman pengguna
          tetap konsisten.
        </p>

        <h2 class="text-xl font-semibold text-green-700 mt-10 mb-4">
          Struktur Modular & Skalabilitas
        </h2>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Kode sumber terstruktur berdasarkan prinsip pemisahan tanggung jawab —
          komponen, halaman, layanan data, dan konteks aplikasi dikelola dalam
          direktori terpisah. Pendekatan ini mempermudah kolaborasi tim,
          meminimalkan kompleksitas, dan memudahkan pengembangan fitur baru.
        </p>

        <p class="text-base text-gray-700 leading-relaxed">
          Dengan menggabungkan kekuatan
          <span class="font-semibold text-green-600">Lit</span>,
          <span class="font-semibold text-green-600">Tailwind CSS</span>, dan
          kemampuan <span class="font-semibold text-green-600">PWA</span>,
          <span class="font-semibold text-green-600">PWA-Template</span> menjadi
          fondasi ideal untuk membangun aplikasi web yang cepat, responsif,
          dapat diinstal, serta berfungsi penuh bahkan tanpa koneksi internet.
        </p>
      </section>
    `;
  }
}
