import styled from 'styled-components'
import { PokemonType, pokemonTypeColors } from '../../shared/utils/pokemon'

interface PokemonCardContainerProps {
  pokemonType: PokemonType
}

export const PokemonCardContainer = styled.div<PokemonCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  padding: 1rem 1rem 0rem 1rem;

  border: 1px solid #ccc;
  border-radius: 0.5rem;

  background-color: #fff;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: 10rem;

  span {
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: ${props => pokemonTypeColors[props.pokemonType]};
    color: #fff;
    width: 10rem;
    padding-bottom: 1rem;
    height: 3rem;
    line-height: 3rem;

    p {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: capitalize;
      font-family: 'Montserrat', sans-serif;
    }
  }

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 720px) {
    margin: 0.6rem;
    padding: 0.6 0.6 0 0.6rem;
  }
`
