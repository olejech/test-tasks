import React from 'react'
import Input from './ui/Input'

export const Search = ({ search }) => {
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      search(e.target.value)
      e.target.value = ''
    }
  }
  return (
    <label>
      Поиск:
      <Input onKeyPress={handleKeyPress} />
    </label>
  )
}
