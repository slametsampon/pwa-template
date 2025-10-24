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
          Tentang SPA-Template
        </h1>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          <span class="font-semibold text-green-600">SPA-Template</span> adalah
          sebuah kerangka kerja (_template_) berbasis komponen untuk membangun
          aplikasi web modern dengan pendekatan
          <span class="font-semibold text-green-600">
            Single Page Application (SPA)
          </span>
          dan
          <span class="font-semibold text-green-600">
            Component-Driven Development (CDD) </span
          >. Template ini memanfaatkan kombinasi LitElement, Tailwind CSS, dan
          esbuild untuk menghasilkan antarmuka pengguna yang ringan, cepat, dan
          dapat diandalkan.
        </p>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Didesain untuk pengembangan modular dan maintainable, SPA-Template
          menyediakan fondasi yang solid untuk berbagai jenis aplikasi, mulai
          dari dashboard IoT, sistem informasi internal, hingga aplikasi mandiri
          berbasis web. Template ini memudahkan tim dalam menyusun dan mengelola
          komponen UI secara terpisah serta terorganisir.
        </p>

        <h2 class="text-xl font-semibold text-green-700 mt-8 mb-4">
          Teknologi Inti
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">Frontend</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Framework: <span class="font-medium">LitElement</span></li>
              <li>Styling: <span class="font-medium">Tailwind CSS</span></li>
              <li>Build Tool: <span class="font-medium">esbuild</span></li>
              <li>
                Arsitektur:
                <span class="font-medium"
                  >CDD (Component-Driven Development)</span
                >
              </li>
              <li>Bahasa: <span class="font-medium">TypeScript</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-green-600 mb-2">
              Integrasi Opsional
            </h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Dukungan MQTT via WebSocket (untuk sistem IoT)</li>
              <li>REST API backend (Fastify, Express, dll)</li>
              <li>
                Kompatibel dengan hosting lokal: Raspberry Pi / Static Host
              </li>
              <li>Deployment ke GitHub Pages, Vercel, Netlify, dll.</li>
            </ul>
          </div>
        </div>

        <h2 class="text-xl font-semibold text-green-700 mt-10 mb-4">
          Struktur Modular
        </h2>

        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Kode sumber terstruktur berdasarkan pemisahan tanggung jawab:
          komponen, halaman, layanan data, dan konteks aplikasi dipisahkan dalam
          direktori yang jelas. Pendekatan ini mendukung kolaborasi tim,
          pemeliharaan jangka panjang, serta skalabilitas.
        </p>

        <p class="text-base text-gray-700 leading-relaxed">
          Dengan arsitektur ringan dan berbasis standar web modern,
          <span class="font-semibold text-green-600">SPA-Template</span> dapat
          dijadikan fondasi bagi berbagai solusi antarmuka yang responsif,
          terdistribusi, dan sepenuhnya open-source.
        </p>
      </section>
    `;
  }
}
