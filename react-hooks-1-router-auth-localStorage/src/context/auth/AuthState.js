import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './authReducer'
import { SIGNIN, SIGNOUT, SIGNIN_AUTO } from '../types'

export const AuthState = ({ children }) => {
  const initialState = {
    token: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const signIn = async ({ login, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (login === 'admin' && password === '123') {
          localStorage.setItem('token', true)
          dispatch({ type: SIGNIN, token: true })
          resolve()
        } else
          reject({ message: 'Имя пользователя или пароль введены не верно' })
      }, 1000)
    })
  }

  const signOut = async () => {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      dispatch({ type: SIGNOUT })
      resolve({ message: 'Вышли' })
    })
  }

  const autoSignIn = token => {
    dispatch({ type: SIGNIN_AUTO, token })
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      autoSignIn(token)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth: state, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
