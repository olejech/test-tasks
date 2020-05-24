import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        Страница не найдена. <Link to="/">Вернуться на главную</Link>
      </p>
    </>
  )
}
