import React from 'react'
import styled from 'styled-components'
import { Flex } from './ui/Layout'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.div`
  background-color: ${props => props.theme.brandColor};
  max-width: 600px;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 7px;
`

export const Alert = ({ error, onClick }) => {
  return (
    <TransitionGroup component={null} appear>
      <CSSTransition timeout={1000} classNames="transition2s">
        <Message>
          <Flex sb>
            <h2>Ошибка:</h2>
            <button className="btn" onClick={onClick}>
              &times;
            </button>
          </Flex>
          <p>{error}</p>
        </Message>
      </CSSTransition>
    </TransitionGroup>
  )
}
