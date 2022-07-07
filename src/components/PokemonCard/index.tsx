import { Pokemon } from 'pokenode-ts'
import { PokemonCardContainer } from './styles'

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <PokemonCardContainer>
      {pokemon.sprites.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <p>Loading...</p>
      )}

      <span>
        <p>{pokemon.name}</p>
      </span>
    </PokemonCardContainer>
  )
}
