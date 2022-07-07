import styled from 'styled-components'

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 0.5rem;

  background-color: #fff;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  max-width: 10rem;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-inline: 2rem;
    margin-bottom: 0.5rem;
  }
`
