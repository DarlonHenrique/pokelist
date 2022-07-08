import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  button {
    background-color: var(--blue);
    color: #fff;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    margin-right: 0.5rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(80%);
    }
  }
`
