import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'

export const Nav = () => {
  const { auth, signOut } = useContext(AuthContext)

  const logoutHandler = e => {
    e.preventDefault()
    signOut()
  }

  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>
          <NavLink exact to="/">
            Тестовое задание #3
          </NavLink>
        </h1>
      </div>
      {auth.token ? (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/auth" onClick={logoutHandler}>
              Выход
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/posts">Посты</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={`/profile/${auth.userId}`}>Профиль</NavLink>
          </li>
        </ul>
      ) : (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/auth">Вход/Регистрация</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/posts">Посты</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}
