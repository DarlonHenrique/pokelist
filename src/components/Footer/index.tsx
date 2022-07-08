import { usePokemons } from '../../hooks/usePokemons'
import { FooterContainer } from './styles'

export function Footer() {
  const { loadNextPage, loadPrevPage, offset } = usePokemons()

  return (
    <FooterContainer>
      <button disabled={offset === 0} onClick={loadPrevPage}>
        Prev Page
      </button>
      <button>{offset / 20 + 1}</button>
      <button onClick={loadNextPage}>Next Page</button>
    </FooterContainer>
  )
}
