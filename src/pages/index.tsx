import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { PokemonCard } from '../components/PokemonCard'
import { Footer } from '../components/Footer'
import { usePokemons } from '../hooks/usePokemons'
import { Pokemons } from '../components/Pokemons'
import Head from 'next/head'

const Home: NextPage = () => {
  const { pokemons } = usePokemons()

  return (
    <>
      <Head>
        <title>PokeList</title>
      </Head>
      <Header />
      <main>
        <Pokemons />
      </main>

      <Footer />
    </>
  )
}

export default Home
