import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { PokemonCard } from '../components/PokemonCard'
import { Footer } from '../components/Footer'
import { usePokemons } from '../hooks/usePokemons'

const Home: NextPage = () => {
  const { pokemons } = usePokemons()

  return (
    <>
      <Header />

      <main>
        <div className='pokemons-container'>
          {pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
