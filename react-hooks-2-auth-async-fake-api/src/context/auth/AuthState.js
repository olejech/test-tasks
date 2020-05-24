import React, { useReducer, useEffect, useCallback, useState } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './authReducer'
import { SIGNIN, SIGNOUT, SIGNIN_AUTO } from '../types'
import { useHttp } from '../../hooks/http.hook'

const storageName = 'token'

export const AuthState = ({ children }) => {
  const initialState = {
    token: null,
    userId: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const [ready, setReady] = useState(false)
  const { request, loading } = useHttp()

  const signIn = async formData => {
    try {
      const response = await request(
        'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
        'POST',
        formData
      )
      const { id } = response.data

      localStorage.setItem(
        storageName,
        JSON.stringify({
          userId: id,
          token: true
        })
      )

      dispatch({
        type: SIGNIN,
        payload: { token: true, userId: id }
      })
      return response
    } catch (error) {}
  }

  const signOut = async () => {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      dispatch({ type: SIGNOUT })
      resolve({ message: 'Вышли' })
    })
  }

  const autoSignIn = useCallback(payload => {
    dispatch({ type: SIGNIN_AUTO, payload })
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      autoSignIn({ token: data.token, userId: data.userId })
    }
    setReady(true)
  }, [autoSignIn])

  return (
    <AuthContext.Provider
      value={{ auth: state, signIn, signOut, loading, ready }}
    >
      {children}
    </AuthContext.Provider>
  )
}
