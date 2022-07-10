import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Pokemons } from '../components/Pokemons'
import Head from 'next/head'
import Modal from 'react-modal'
import { PokemonModal } from '../components/PokemonModal'
import { usePokemonModal } from '../hooks/usePokemonModal'

Modal.setAppElement('#__next')

const Home: NextPage = () => {
  const { isPokemonModalOpen, handleClosePokemonModal } = usePokemonModal()

  return (
    <>
      <Head>
        <title>PokeList</title>
      </Head>
      <Header />
      <PokemonModal
        isOpen={isPokemonModalOpen}
        onRequestClose={handleClosePokemonModal}
      />
      <main>
        <Pokemons />
      </main>

      <Footer />
    </>
  )
}

export default Home
