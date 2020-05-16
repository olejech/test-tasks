import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const Wrap = styled.table`
  width: 100%;
  margin: 1rem 0;

  .table {
    &-tbody {
      display: flex;
      flex-direction: column;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      background-color: #fff;
      margin-bottom: 0.5rem;

      @media (max-width: 456px) {
        flex-direction: column;
      }
    }

    &-col {
      display: flex;
      padding: 0 1rem;
    }

    &-img {
      width: 50px;
      height: 50px;
    }
  }
`

export const Table = ({ users, onClick }) => {
  return (
    <Wrap>
      <TransitionGroup component="tbody" className="table-tbody" appear>
        {users.map(user => (
          <CSSTransition key={user.id} timeout={1000} classNames="transition2s">
            <tr className="table-row">
              <td className="table-col">
                <img
                  className="table-img"
                  src={`/images/${user.image}.svg`}
                  alt={user.image}
                />
              </td>
              <td className="table-col">
                <span>{user.id}</span>
              </td>
              <td className="table-col">
                <span>{user.name}</span>
              </td>
              <td className="table-col">
                <span>{user.age}</span>
              </td>
              <td className="table-col">
                <span>{user.phone}</span>
              </td>
              <td className="table-col">
                <button
                  className={user.favourite ? `btn fav` : 'btn'}
                  onClick={() => onClick(user.id)}
                >
                  {user.favourite ? '✓' : '𐄂'}
                </button>
              </td>
            </tr>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrap>
  )
}
