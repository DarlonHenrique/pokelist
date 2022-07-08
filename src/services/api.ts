import { PokemonClient } from 'pokenode-ts'

export const api = new PokemonClient({
  cacheOptions: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
})
