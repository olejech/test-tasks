import React, { useState } from 'react'
import { Video } from './Video'
import styled from 'styled-components'
import { Flex } from '../ui/Layout'
import { Card } from './Card'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const WrapCard = styled.div`
  max-width: ${props => (props.video ? '100%' : '45%')};
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;

  @media (max-width: 724px) {
    max-width: 100%;
  }

  video {
    max-width: 50%;
    outline: none;
    margin-left: 1rem;

    @media (max-width: 441px) {
      max-width: 100%;
      margin: 1rem 0 0 0;
    }
  }
`

export const Preview = ({ users, onClick }) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  return (
    <Flex sb wrap="true">
      <TransitionGroup component={null} appear>
        {users.map(user => (
          <CSSTransition key={user.id} timeout={1000} classNames="transition2s">
            <WrapCard video={user.video}>
              <Flex sb>
                <Card data={user} onClick={onClick} />

                {user.video && (
                  <Video
                    video={user.video}
                    isAutoPlay={isAutoPlay}
                    isAutoPlayHandler={() => setIsAutoPlay(false)}
                  />
                )}
              </Flex>
            </WrapCard>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Flex>
  )
}
