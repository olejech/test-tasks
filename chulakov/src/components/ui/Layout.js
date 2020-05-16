import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: ${props => (props.aic ? 'center' : 'flex-start')};
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  justify-content: ${props => props.sb && 'space-between'};
  flex-wrap: ${props => props.wrap && 'wrap'};

  @media (max-width: 441px) {
    flex-direction: column;
  }
`

export const Container = styled.div`
  max-width: 1180px;
  padding: 0 15px;
  margin: 0 auto;
  min-height: 100vh;
`
