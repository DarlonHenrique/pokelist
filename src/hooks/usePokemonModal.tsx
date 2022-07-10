import { Pokemon } from 'pokenode-ts'
import { createContext, useContext, useState } from 'react'

// type for modal context
interface ModalContextType {
  isPokemonModalOpen: boolean
  handleOpenPokemonModal: (pokemon: Pokemon) => void
  handleClosePokemonModal: () => void
  pokemon: Pokemon | undefined
}

// create modal context
const pokemonModalContext = createContext<ModalContextType>({
  isPokemonModalOpen: false,
  handleOpenPokemonModal: () => {},
  handleClosePokemonModal: () => {},
  pokemon: {} as Pokemon
})

// create and export pokemon modal provider
export function PokemonModalProvider({
  children
}: {
  children: React.ReactNode // type for children of the provider component
}) {
  // state who are the pokemon modal open/close status
  const [isPokemonModalOpen, setIsPokemonModalOpen] = useState(false)
  const [pokemon, setPokemon] = useState<Pokemon>()

  // function to set the pokemon modal to open
  const handleOpenPokemonModal = (pokemon: Pokemon) => {
    setIsPokemonModalOpen(true)
    setPokemon(pokemon)
  }

  // function to set the pokemon modal to close
  const handleClosePokemonModal = () => {
    setIsPokemonModalOpen(false)
  }

  // returning context provider with value of the state and functions
  return (
    <pokemonModalContext.Provider
      value={{
        isPokemonModalOpen, // value of the state
        handleOpenPokemonModal, // function to set the pokemon modal to open
        handleClosePokemonModal, // function to set the pokemon modal to close
        pokemon // value of the pokemon state with pokemon data
      }}
    >
      {children}
    </pokemonModalContext.Provider>
  )
}

// create and export custom hook
export function usePokemonModal() {
  const context = useContext(pokemonModalContext)
  return context
}
