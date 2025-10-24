// frontend/src/pages/home.ts

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/cards/feature-card.js';

@customElement('page-home')
export class PageHome extends LitElement {
  createRenderRoot() {
    return this; // gunakan light DOM agar Tailwind CSS global tetap aktif
  }

  render() {
    return html`
      <section class="p-6 space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 class="text-2xl font-bold text-green-800 mb-2">
            🚀 Selamat Datang di PWA-Template
          </h1>
          <p class="text-gray-700 text-base leading-relaxed">
            <span class="font-semibold">PWA-Template</span> adalah kerangka
            kerja (_template_) modern untuk membangun
            <span class="font-semibold text-green-700"
              >Progressive Web App (PWA)</span
            >
            yang cepat, dapat diinstal seperti aplikasi native, dan berfungsi
            penuh bahkan saat <span class="font-semibold">offline</span>.
          </p>

          <p class="text-gray-700 text-base leading-relaxed mt-2">
            Template ini dibangun menggunakan
            <span class="font-semibold">Lit Web Components</span> dan
            <span class="font-semibold">Tailwind CSS</span>, dikombinasikan
            dengan sistem bundling cepat dari
            <span class="font-semibold">esbuild</span>, serta caching pintar
            melalui <span class="font-semibold">Workbox</span> dan
            <span class="font-semibold">IndexedDB (idb)</span>. Arsitektur
            berbasis <span class="italic">App Shell</span> menjamin waktu muat
            super cepat dan pengalaman pengguna yang stabil.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <feature-card
            title="App Shell Architecture"
            icon="🏗️"
            color="green"
            description="Struktur UI utama (header, footer, router) dimuat instan dari cache agar tetap berfungsi tanpa koneksi internet."
          ></feature-card>

          <feature-card
            title="Offline Data"
            icon="💾"
            color="blue"
            description="Simpan dan tampilkan data API secara lokal menggunakan IndexedDB — tetap berfungsi walau jaringan terputus."
          ></feature-card>

          <feature-card
            title="Cepat & Installable"
            icon="⚡"
            color="yellow"
            description="Build super cepat dengan esbuild dan PWA manifest yang memungkinkan aplikasi diinstal ke perangkat pengguna."
          ></feature-card>
        </div>

        <footer class="text-sm text-gray-500 mt-6 text-center">
          Gunakan menu navigasi di bagian atas untuk menjelajahi fitur,
          dokumentasi, dan arsitektur dari
          <span class="font-semibold text-green-600">PWA-Template</span>.
        </footer>
      </section>
    `;
  }
}
