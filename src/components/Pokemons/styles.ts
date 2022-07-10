import styled from 'styled-components'

export const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 5rem;
  justify-content: center;

  @media (max-width: 1080px) {
    margin: 1rem 2rem;
  }
  @media (max-width: 720px) {
    margin: 1rem 0rem;
  }
`
