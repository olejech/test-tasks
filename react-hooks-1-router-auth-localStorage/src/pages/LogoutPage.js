import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

export const LogoutPage = () => {
  const { signOut } = useContext(AuthContext)

  signOut()

  return <></>
}
