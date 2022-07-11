import { PokemonClient } from 'pokenode-ts'
import localforage from 'localforage'

// Create `localforage` instance
const forageStore = localforage.createInstance({
  // Prefix all storage keys to prevent conflicts
  name: 'pokelist',
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE]
})

export const api = new PokemonClient({
  cacheOptions: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    store: forageStore
  }
})
