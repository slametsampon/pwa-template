// frontend/src/utils/cacheStore.ts

import { openDB, DBSchema } from 'idb';

interface AppCacheDB extends DBSchema {
  apiCache: { key: string; value: any };
  meta: { key: string; value: any }; // untuk TTL/versi, opsional
}

const DB_NAME = 'pwa-template-cache';
const DB_VERSION = 1; // naikkan jika ubah skema
const STORE = 'apiCache';
const META = 'meta';

const dbPromise = openDB<AppCacheDB>(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
  },
});

export async function setCache(key: string, data: any, ttlMs?: number) {
  const db = await dbPromise;
  await db.put(STORE, data, key);
  if (ttlMs) {
    const expireAt = Date.now() + ttlMs;
    await db.put(META, { expireAt }, `${key}:ttl`);
  }
}
export async function getCache<T = any>(key: string): Promise<T | null> {
  const db = await dbPromise;
  const meta = await db.get(META, `${key}:ttl`);
  if (meta?.expireAt && Date.now() > meta.expireAt) {
    await db.delete(STORE, key);
    await db.delete(META, `${key}:ttl`);
    return null;
  }
  return (await db.get(STORE, key)) ?? null;
}
export async function clearAllCache() {
  const db = await dbPromise;
  await db.clear(STORE);
  await db.clear(META);
}
