import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text'
})`
  border: none;
  padding: 0.5rem;
  outline: none;
  margin-left: 0.5rem;

  @media (max-width: 441px) {
    margin: 2rem 0 2rem 0.5rem;
  }
`

export default Input
