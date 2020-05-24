import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'

export const Nav = () => {
  const { auth } = useContext(AuthContext)

  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>
          <NavLink exact to="/">
            Тестовое задание
          </NavLink>
        </h1>
      </div>
      {auth.token ? (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/logout">Выход</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/news">Новости</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/profile">Профиль</NavLink>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/login">Вход</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/news">Новости</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}
