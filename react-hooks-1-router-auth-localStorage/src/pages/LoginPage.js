import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

export const LoginPage = props => {
  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const { signIn } = useContext(AuthContext)

  const submitHandler = async e => {
    e.preventDefault()

    try {
      await signIn(form)
      props.history.push('/profile')
    } catch (error) {
      alert(error.message)
    }
  }

  const changeHandler = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <h2>Авторизация</h2>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Логин"
          name="login"
          onChange={changeHandler}
        />

        <input
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={changeHandler}
        />
        <button>Войти</button>
      </form>
    </div>
  )
}
