import { usePokemons } from '../../hooks/usePokemons'
import { PokemonCard } from '../PokemonCard'
import { PokemonsContainer } from './styles'

export function Pokemons() {
  const { pokemons } = usePokemons()

  return (
    <PokemonsContainer>
      {pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </PokemonsContainer>
  )
}
