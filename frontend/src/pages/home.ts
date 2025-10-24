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
            🎉 Selamat Datang di SPA-Template
          </h1>
          <p class="text-gray-700 text-base leading-relaxed">
            <span class="font-semibold">SPA-Template</span> adalah kerangka
            kerja modern untuk membangun aplikasi berbasis web yang ringan dan
            modular, menggunakan
            <span class="font-semibold">LitElement</span> dan
            <span class="font-semibold">Tailwind CSS</span>. Template ini
            dirancang dengan fokus pada performa, keterbacaan kode, dan
            kemudahan pemeliharaan untuk pengembangan skala kecil hingga besar.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <feature-card
            title="Web Components"
            icon="🧩"
            color="green"
            description="Bangun antarmuka modular, reusable, dan berbasis standar web melalui LitElement."
          ></feature-card>

          <feature-card
            title="Tailwind CSS"
            icon="🎨"
            color="blue"
            description="Gunakan pendekatan utility-first untuk styling yang efisien dan konsisten tanpa CSS tambahan."
          ></feature-card>

          <feature-card
            title="Build Cepat"
            icon="⚡"
            color="yellow"
            description="Proses bundling super cepat menggunakan esbuild — cocok untuk pengembangan dan produksi."
          ></feature-card>
        </div>

        <footer class="text-sm text-gray-500 mt-6">
          Gunakan menu navigasi di bagian atas untuk menjelajahi struktur
          komponen, halaman, serta dokumentasi lainnya dari SPA-Template.
        </footer>
      </section>
    `;
  }
}
