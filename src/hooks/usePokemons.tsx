import { Pokemon } from 'pokenode-ts'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

// typing for the context
interface PokemonsContextType {
  pokemons: Pokemon[]
  loadNextPage: () => void
  loadPrevPage: () => void
  offset: number
}

// create the context
const PokemonsContext = createContext<PokemonsContextType>({
  pokemons: [],
  loadNextPage: () => {},
  loadPrevPage: () => {},
  offset: 0
})

// create and export the provider
export function PokemonsProvider({ children }: { children: ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [offset, setOffset] = useState(0)

  // load pokemons first time the component is mounted
  useEffect(() => {
    loadPokemons(0)
  }, [])

  useEffect(() => {
    loadPokemons(offset)
  }, [offset])

  const loadNextPage = () => {
    setOffset(offset + 20)
  }

  const loadPrevPage = () => {
    setOffset(offset - 20)
  }

  const loadPokemons = async (offset: number) => {
    try {
      const pokemons = await api.listPokemons(offset, 18) // listPokemons method returns a list of pokemons without details (only name and url)
      const promisePokemonsWithDetails = pokemons.results.map(async pokemon => {
        // map over the list of pokemons and get the details of each one
        const pokemonDetailed = await api.getPokemonByName(pokemon.name) // getPokemonByName method returns a pokemon with details
        return pokemonDetailed // return the details of each pokemon
      })
      const pokemonsWithDetails = await Promise.all(promisePokemonsWithDetails) // wait for all the promises to be resolved
      setPokemons(pokemonsWithDetails)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <PokemonsContext.Provider
      value={{ pokemons, loadNextPage, loadPrevPage, offset }}
    >
      {children}
    </PokemonsContext.Provider>
  ) // return the context and the children
}

// create and export the custom hook usePokemons
export function usePokemons() {
  const context = useContext(PokemonsContext)
  return context
}
