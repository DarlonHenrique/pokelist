import styled from 'styled-components'

export const ModalContainer = styled.div``

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

  .pokemon-stats-table {
    border: 3px solid black;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    tr {
      display: flex;
      padding-inline: 1rem;
      justify-content: space-between;
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
  }
`
