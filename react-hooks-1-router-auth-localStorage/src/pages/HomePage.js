import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h2>Home</h2>
      <p>
        В задании реализована авторизация одного пользователя, симулируя
        ассинхронный запрос на сервер с помощью промиса:
      </p>
      <ul>
        <li>admin</li>
        <li>123</li>
      </ul>
      <p>Благодаря localStorage авторизация поддерживается.</p>
      <p>
        Так же добавлен <Link to="/profile">приватный route профиль</Link>
      </p>
      <p>
        И react hooks{' '}
        <span role="img" aria-label="heard">
          ❤️
        </span>
      </p>
    </>
  )
}
