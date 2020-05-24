import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'

export const Nav = () => {
  const { auth, signOut } = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = e => {
    e.preventDefault()
    signOut()
    history.push('/')
  }

  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>
          <NavLink exact to="/">
            Тестовое задание #2
          </NavLink>
        </h1>
      </div>
      {auth.token ? (
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/login" onClick={logoutHandler}>
              Выход
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/news">Новости</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={`/profile/${auth.userId}`}>Профиль</NavLink>
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
