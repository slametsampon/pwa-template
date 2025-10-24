// frontend/src/pages/dashboard.ts

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchWithCache } from '../utils/apiClient';

/**
 * Page: Dashboard (Offline-Ready)
 * -------------------------------
 * Sekarang halaman ini mendukung mode offline melalui IndexedDB caching layer.
 * Data dummy disimulasikan seolah berasal dari endpoint `/api/summary`.
 */

@customElement('page-dashboard')
export class PageDashboard extends LitElement {
  @state() private activeTab: 'produksi' | 'devices' | 'history' = 'produksi';
  @state() private summary: any = null;
  @state() private offline = false;

  createRenderRoot() {
    return this; // gunakan light DOM agar Tailwind global tetap aktif
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadSummaryData();
  }

  /**
   * Contoh pemanggilan API dengan fallback ke IndexedDB
   */
  private async loadSummaryData() {
    try {
      // ambil data (jika offline → fallback ke cache)
      const data = await fetchWithCache('/api/summary', {
        ttlMs: 10 * 60 * 1000,
      });
      this.summary = data;
      this.offline = false;
    } catch (err) {
      console.warn('⚠️ Tidak dapat memuat data summary:', err);
      this.offline = true;
    }
  }

  private handleTabChange(e: Event) {
    const target = e.currentTarget as HTMLButtonElement;
    const id = target.dataset.id as typeof this.activeTab;
    if (id) this.activeTab = id;
  }

  render() {
    return html`
      <div class="p-6 space-y-6">
        <div class="flex space-x-4 border-b pb-2">
          ${['produksi', 'devices', 'history'].map(
            (tab) => html`
              <button
                data-id=${tab}
                @click=${this.handleTabChange}
                class=${this.activeTab === tab
                  ? 'text-green-700 font-semibold border-b-2 border-green-600 pb-1'
                  : 'text-gray-500 hover:text-green-600'}
              >
                ${tab === 'produksi'
                  ? '🏭 Produksi'
                  : tab === 'devices'
                  ? '🔌 Devices'
                  : '📜 Event History'}
              </button>
            `
          )}
        </div>

        <!-- Status koneksi / data -->
        <div class="text-sm text-gray-600 mt-2">
          ${this.offline
            ? html`<span class="text-yellow-700"
                >⚠️ Mode offline — menampilkan data terakhir.</span
              >`
            : this.summary
            ? html`<span class="text-green-700">✅ Data terbaru dimuat.</span>`
            : html`<span class="text-gray-500">⏳ Memuat data...</span>`}
        </div>

        <!-- Isi tab aktif -->
        ${this.activeTab === 'produksi'
          ? this.renderProduksiTab()
          : this.activeTab === 'devices'
          ? this.renderDevicesTab()
          : this.renderHistoryTab()}
      </div>
    `;
  }

  private renderProduksiTab() {
    return html`
      <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <h2 class="text-lg font-semibold text-green-700 mb-4">
          📊 Produksi Hari Ini
        </h2>

        ${this.summary
          ? html`
              <div class="grid md:grid-cols-3 gap-4 text-center">
                <div class="p-3 bg-green-50 rounded-lg">
                  <p class="text-sm text-gray-600">Total Produksi</p>
                  <p class="text-2xl font-bold text-green-700">
                    ${this.summary.produksi ?? '-'}
                  </p>
                </div>
                <div class="p-3 bg-blue-50 rounded-lg">
                  <p class="text-sm text-gray-600">Unit Aktif</p>
                  <p class="text-2xl font-bold text-blue-700">
                    ${this.summary.devices ?? '-'}
                  </p>
                </div>
                <div class="p-3 bg-yellow-50 rounded-lg">
                  <p class="text-sm text-gray-600">Terakhir Update</p>
                  <p class="text-base text-yellow-800">
                    ${this.summary.updatedAt
                      ? new Date(this.summary.updatedAt).toLocaleString()
                      : '-'}
                  </p>
                </div>
              </div>
            `
          : html`
              <div
                class="bg-yellow-50 border border-yellow-300 p-4 rounded text-sm text-yellow-800"
              >
                Belum ada data produksi. Periksa koneksi atau cache IndexedDB.
              </div>
            `}
      </div>
    `;
  }

  private renderDevicesTab() {
    return html`
      <div
        class="bg-yellow-50 border border-yellow-300 p-4 rounded text-sm text-yellow-800"
      >
        Halaman dummy tab <strong>Devices</strong> — placeholder tanpa integrasi
        MQTT.
      </div>
    `;
  }

  private renderHistoryTab() {
    return html`
      <div
        class="bg-yellow-50 border border-yellow-300 p-4 rounded text-sm text-yellow-800"
      >
        Halaman dummy tab <strong>Event History</strong> — belum terhubung ke
        backend.
      </div>
    `;
  }
}
