import type { GetStaticProps, NextPage } from 'next'
import { Pokemon } from 'pokenode-ts'
import Head from 'next/head'
import { Header } from '../components/Header'
import { api } from '../services/api'
import { PokemonCard } from '../components/PokemonCard'

const Home: NextPage<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <>
      <Head>
        <title>PokeList</title>
        <meta
          name='description'
          content='Pokelist App Created With ☕ by Darlon Henrique'
        />
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
      </Head>
      <Header />

      <main>
        <div className='pokemons-container'>
          {pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await api.listPokemons(undefined, 18) // listPokemons method returns a list of pokemons without details (only name and url)
  const pokemonsDetails = pokemons.results.map(async pokemon => {
    // map over the list of pokemons and get the details of each one
    const pokeDetailed = await api.getPokemonByName(pokemon.name)
    return pokeDetailed
  })
  const pokemonsWithDetails = await Promise.all(pokemonsDetails)
  return {
    props: {
      pokemons: pokemonsWithDetails
    },
    revalidate: 60 * 60 * 24 // revalidate every 24 hours
  }
}

export default Home
