import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { PokemonsProvider } from '../hooks/usePokemons'
import { PokemonModalProvider } from '../hooks/usePokemonModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <PokemonModalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </PokemonModalProvider>
    </PokemonsProvider>
  )
}

export default MyApp
