import { usePokemons } from '../../hooks/usePokemons'
import { FooterContainer } from './styles'

export function Footer() {
  const { loadNextPage, loadPrevPage } = usePokemons()
  return (
    <FooterContainer>
      <button onClick={loadPrevPage}>Previous</button>
      <button onClick={loadNextPage}>Next</button>
    </FooterContainer>
  )
}
