import { ModalContainer, PokemonModalContentContainer } from './styles'
import Image from 'next/image'
import Modal from 'react-modal'
import closeSvg from '../../assets/close.svg'
import { usePokemonModal } from '../../hooks/usePokemonModal'

interface PokemonModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function PokemonModal({ isOpen, onRequestClose }: PokemonModalProps) {
  const { pokemon } = usePokemonModal()

  return (
    <ModalContainer>
      <Modal
        isOpen={isOpen}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        onRequestClose={onRequestClose}
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
              {pokemon.sprites.front_default && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              )}

              <table className='pokemon-stats-table'>
                <tbody>
                  {pokemon.stats.map(stat => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PokemonModalContentContainer>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>
    </ModalContainer>
  )
}
