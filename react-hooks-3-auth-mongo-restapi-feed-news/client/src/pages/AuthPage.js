import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'
import { AuthForm } from '../components/AuthForm'

export const AuthPage = props => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { signIn, loading, register } = useContext(AuthContext)

  const isValidated = ({ email, password }) =>
    email || password ? true : false

  const submitLoginHandler = async e => {
    e.preventDefault()
    if (!isValidated(form)) return alert('Не все поля заполнены')

    try {
      const { message, userId } = await signIn(form)
      alert(message)
      props.history.push(`/profile/${userId}`)
    } catch (error) {}
  }

  const submitRegisterHandler = async e => {
    e.preventDefault()
    if (!isValidated(form)) return alert('Не все поля заполнены')

    try {
      const { message } = await register(form)
      alert(message)
      props.history.push(`/auth`)
    } catch (error) {}
  }

  const changeHandler = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <AuthForm
      loading={loading}
      submitLoginHandler={submitLoginHandler}
      submitRegisterHandler={submitRegisterHandler}
      changeHandler={changeHandler}
    />
  )
}
