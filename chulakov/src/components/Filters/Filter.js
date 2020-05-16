import React from 'react'
import localizeFilter from '../../common/localize'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .filter {
    &-tabs {
      padding: 0;
      list-style: none;
      display: flex;
      flex-basis: 100%;
      flex-wrap: wrap;
      max-width: 400px;
      min-height: 120px;

      @media (max-width: 691px) {
        min-height: ${props => (props.autoHeight ? '56px' : '96px')};
      }
    }

    &-item {
      width: 120px;
      height: ${props => (props.autoHeight ? 'inherit' : '40px')};
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2px;
      flex: 1 1 auto;
      margin-bottom: 1rem;

      &:hover {
        background-color: ${props => props.theme.brandColor};
        cursor: pointer;
        transition-property: background-color;
        transition-duration: 0.5s;
      }
    }

    & a {
      color: #000;
      text-decoration: none;
    }
  }
`

export const Filter = ({ text, name, query, onClick, autoHeight }) => {
  const filters = localizeFilter(name)

  const setActiveClass = name => {
    if (!query || !name) return
    const { filter, orderBy, view } = query
    switch (name) {
      case filter:
        return 'active'
      case orderBy:
        return 'active'
      case view || 'table':
        return 'active'
      default:
        return ''
    }
  }

  return (
    <Wrap autoHeight={autoHeight}>
      <span className="subtitle">{text}</span>
      <ul className="filter-tabs">
        {filters.map(filter => (
          <li
            key={filter.label}
            className={`${setActiveClass(filter.name)} filter-item`}
            onClick={() => onClick(filter)}
          >
            {filter.label}
          </li>
        ))}
      </ul>
    </Wrap>
  )
}
