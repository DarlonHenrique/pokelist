import styled from 'styled-components'
import { PokemonType, pokemonTypeColors } from '../../shared/utils/pokemon'

interface ImageContainerProps {
  pokemonType: PokemonType
}

export const PokemonModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;

  h1 {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: bold;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
    margin-top: 1rem;
  }
`

export const ImageContainer = styled.div<ImageContainerProps>`
  border: 2px solid ${props => pokemonTypeColors[props.pokemonType]};
  border-radius: 0.5rem;
`

export const PokemonStatsTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;

  tr {
    display: flex;
    padding-inline: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
  }

  td {
    &:first-child {
      font-weight: 700;
    }

    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    padding: 0.25rem;
    text-transform: capitalize;

    &:last-child {
      text-align: right;
    }
  }
`

export const TypeContainer = styled.div`
  margin-top: 1rem;

  .single-type-container {
    display: flex;
    align-items: center;
    justify-content: left;

    &:last-child {
      margin-top: 0.5rem;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    font-size: 1.3rem;
    font-weight: 700;

    text-transform: capitalize;

    &:first-child {
      margin-bottom: 0.3rem;
    }
  }
`
