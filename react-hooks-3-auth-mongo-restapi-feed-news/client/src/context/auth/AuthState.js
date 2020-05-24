import React, { useReducer, useEffect, useCallback, useState } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './authReducer'
import { SIGNIN, SIGNOUT, SIGNIN_AUTO } from '../types'
import { useHttp } from '../../hooks/http.hook'
import jwtDecode from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const storageName = 'userData'

export const AuthState = ({ children }) => {
  const initialState = {
    token: null,
    userId: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const [ready, setReady] = useState(false)
  const { request, loading } = useHttp()
  const history = useHistory()

  const signIn = async formData => {
    try {
      const { token, userId, message } = await request(
        '/api/auth/login',
        'POST',
        formData
      )
      localStorage.setItem(
        storageName,
        JSON.stringify({
          userId,
          token
        })
      )

      dispatch({
        type: SIGNIN,
        payload: { token, userId }
      })
      return { message, userId }
    } catch (error) {}
  }

  const register = async formData => {
    try {
      const response = await request('/api/auth/register', 'POST', formData)
      return response
    } catch (error) {}
  }

  const signOut = useCallback(
    (message = 'Вышли из аккаунта') => {
      localStorage.removeItem(storageName)
      dispatch({ type: SIGNOUT })
      history.push('/auth')
      alert(message)
    },
    [history]
  )

  const autoSignIn = useCallback(payload => {
    dispatch({ type: SIGNIN_AUTO, payload })
  }, [])

  useEffect(() => {
    const { token = null, userId = null } =
      JSON.parse(localStorage.getItem(storageName)) || {}

    if (token && userId) {
      isJwtValid(token)
        ? autoSignIn({ token, userId })
        : signOut('Срок авторизации истёк. Войдите в аккаунт заново')
    }
    setReady(true)
  }, [autoSignIn, signOut])

  return (
    <AuthContext.Provider
      value={{ auth: state, signIn, signOut, register, loading, ready }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function isJwtValid(token) {
  const { exp = 0 } = jwtDecode(token)
  return new Date().getTime() / 1000 < exp
}
