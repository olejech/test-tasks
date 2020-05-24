import React from 'react'

export const HomePage = () => {
  return (
    <>
      <h2>О тестовом задании</h2>
      <p>В задании реализовано full-stack приложение</p>
      <p>
        <strong>Frontend:</strong>
      </p>
      <ul>
        <li>React</li>
        <li>React router</li>
        <li>SCSS</li>
      </ul>
      <p>
        <strong>Backend:</strong>
      </p>
      <ul>
        <li>Atlas MongoDB</li>
        <li>Mongoose</li>
        <li>Express</li>
        <li>Express-validator</li>
        <li>Bcrypt</li>
        <li>JWT</li>
        <li>Config</li>
      </ul>
      <p>
        Авторизация и регистрация. Middleware авторизованных запросов. Валидация
        на клиенте и сервере
      </p>
      <p>Localstorage, автологин, проверка срока JWT токена</p>
      <p>Создание и просмотр своих и всех постов</p>
      <p>404</p>
      <p>Loader</p>
      <p>
        И react hooks{' '}
        <span role="img" aria-label="heard">
          ❤️
        </span>
      </p>
    </>
  )
}
