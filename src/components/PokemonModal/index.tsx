import {
  ImageContainer,
  PokemonModalContentContainer,
  PokemonStatsTable,
  TypeContainer
} from './styles'
import Image from 'next/image'
import Modal from 'react-modal'
import closeSvg from '../../assets/close.svg'
import { usePokemonModal } from '../../hooks/usePokemonModal'
import {
  PokemonType,
  PokemonTypeIcon,
  pokemonTypeIcons
} from '../../shared/utils/pokemon'

// typing for Pokemon Modal Props
interface PokemonModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function PokemonModal({ isOpen, onRequestClose }: PokemonModalProps) {
  const { pokemon } = usePokemonModal() // taking pokemon data from usePokemonModal hook

  return (
    <>
      <Modal
        isOpen={isOpen} // modal need this prop to know if it's open or not
        overlayClassName='react-modal-overlay' // className for the overlay
        className='react-modal-content' // className for the modal
        onRequestClose={onRequestClose} // function to close the modal
      >
        {pokemon ? (
          <PokemonModalContentContainer>
            <button
              type='button'
              className='react-modal-close'
              onClick={onRequestClose}
            >
              <Image src={closeSvg} alt='close modal' />
            </button>
            <h1>{pokemon.name}</h1>
            <div className='grid-container'>
              <div>
                <ImageContainer
                  pokemonType={pokemon.types[0].type.name as PokemonType}
                >
                  {pokemon.sprites.front_default && (
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  )}
                </ImageContainer>

                <TypeContainer>
                  {pokemon.types.map(type => (
                    <div key={type.type.name} className='single-type-container'>
                      <Image
                        src={pokemonTypeIcons[type.type.name as PokemonType]}
                        alt={type.type.name}
                        width={30}
                        height={30}
                        layout='fixed'
                      />
                      <span>{type.type.name}</span>
                    </div>
                  ))}
                </TypeContainer>
              </div>

              <PokemonStatsTable>
                <tbody>
                  {pokemon.stats.map(stat => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </PokemonStatsTable>
            </div>
          </PokemonModalContentContainer>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>
    </>
  )
}
