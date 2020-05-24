import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h2>Home</h2>
      <p>
        В задании реализована авторизация одного пользователя с помощью
        собственного хука useHttp и нативного fetch:
      </p>
      <ul>
        <li>max@test.com</li>
        <li>12345</li>
      </ul>
      <p>Обработка ошибок с backend (авторизация, профиль).</p>
      <p>GET и POST запросы.</p>
      <p>404.</p>
      <p>Loader.</p>
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
