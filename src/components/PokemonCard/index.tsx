import { Pokemon } from 'pokenode-ts'
import { usePokemonModal } from '../../hooks/usePokemonModal'
import { PokemonType } from '../../shared/utils/pokemon'
import { PokemonCardContainer } from './styles'

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const { handleOpenPokemonModal } = usePokemonModal()

  // create a function to handle the click event open modal and pass the pokemon data to the modal
  const handleClick = () => {
    handleOpenPokemonModal(pokemon)
  }

  return (
    <PokemonCardContainer
      pokemonType={pokemon.types[0].type.name as PokemonType}
      onClick={handleClick}
    >
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
