import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { Flex } from '../ui/Layout'
import { Filter } from './Filter'

const query = queryString.parse(window.location.search)

export const FilterList = ({ setFilter, setView }) => {
  const { push } = useHistory()

  useEffect(() => {
    if (query.filter && query.orderBy) {
      setFilter(query)
    }
    if (query.view) {
      setView(query.view)
    }
  }, [setFilter, setView])

  const onClick = selectedFilter => {
    query[selectedFilter.type] = selectedFilter.name
    const queryStringified = queryString.stringify(query)
    push(`/?${queryStringified}`)

    const { filter, orderBy, view } = query

    if (filter && orderBy) {
      setFilter({
        filter,
        orderBy
      })
    }

    if (view) {
      setView(view)
    }
  }

  return (
    <Flex sb className="filters">
      <Filter
        name="filters"
        text="Сортировка"
        query={query}
        onClick={onClick}
      />
      <Filter
        name="views"
        text="Вид"
        query={query}
        onClick={onClick}
        autoHeight
      />
    </Flex>
  )
}
