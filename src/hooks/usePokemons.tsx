import { Pokemon } from 'pokenode-ts'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { toast } from 'react-toastify'
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
    getPokemons(0)
  }, [])

  useEffect(() => {
    // get pokemons again when the offset changes
    getPokemons(offset)
  }, [offset])

  const loadNextPage = () => {
    setOffset(offset + 20)
  }

  const loadPrevPage = () => {
    setOffset(offset - 20)
  }

  const getPokemons = async (offset: number) => {
    try {
      // try to load pokemons from API

      const pokemonsList = await api.listPokemons(offset, 18) // listPokemons method returns a list of pokemons without details (only name and url)

      const pokemonsPromise = pokemonsList.results.map(async pokemon => {
        // map over the list of pokemons and get the details of each one
        const pokemonData = await api.getPokemonByName(pokemon.name) // getPokemonByName method returns a pokemon with details
        return pokemonData // return the details of each pokemon
      })

      const pokemons = await Promise.all(pokemonsPromise) // wait for all the promises to be resolved
      setPokemons(pokemons) // set the pokemons
    } catch (error) {
      // if there is an error

      toast.error('Error on loading pokemons')
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
