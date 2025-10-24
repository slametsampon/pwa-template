// frontend/src/utils/apiClient.ts

import { getCache, setCache } from './cacheStore';

export async function fetchWithCache<T = any>(
  url: string,
  opts?: { ttlMs?: number }
) {
  const { ttlMs = 5 * 60 * 1000 } = opts || {}; // default 5 menit
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    await setCache(url, data, ttlMs);
    return data as T;
  } catch (e) {
    const cached = await getCache<T>(url);
    if (cached) {
      console.warn(`⚠️ Offline/failed. Using cache for ${url}`);
      return cached;
    }
    throw e;
  }
}
