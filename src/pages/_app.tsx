import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { PokemonsProvider } from '../hooks/usePokemons'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </PokemonsProvider>
  )
}

export default MyApp
