import React from 'react'

import styled from 'styled-components'
import { Flex } from '../ui/Layout'

const Wrap = styled.div`
  .card {
    &-video {
      display: flex;
      justify-content: space-between;
      max-width: 100%;

      video {
        max-width: 50%;
        outline: none;
      }
    }

    &-card {
      max-width: 45%;
    }

    &-avatar {
      width: 50px;
    }
  }
`

export const Card = ({ data, onClick }) => (
  <Wrap>
    <Flex sb aic>
      <img
        className="avatar"
        src={`/images/${data.image}.svg`}
        alt={data.image}
      />
      {data.name}
      <button
        className={data.favourite ? `btn fav` : 'btn'}
        onClick={() => onClick(data.id)}
      >
        {data.favourite ? '✓' : '𐄂'}
      </button>
    </Flex>
    <Flex col>
      <p>{data.age} лет</p>
      <p>{data.phone}</p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas qui
      tenetur, repellendus doloribus et temporibus nostrum dignissimos corrupti
      asperiores eligendi!
    </Flex>
  </Wrap>
)
