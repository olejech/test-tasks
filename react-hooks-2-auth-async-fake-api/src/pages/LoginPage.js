import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'
import { Loader } from '../components/Loader'

export const LoginPage = props => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { signIn, loading } = useContext(AuthContext)

  const submitHandler = async e => {
    e.preventDefault()

    try {
      const res = await signIn(form)
      props.history.push(`/profile/${res.data.id}`)
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
    <div>
      <h2>Авторизация</h2>
      {loading ? (
        <Loader />
      ) : (
        <form className="form" onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={changeHandler}
          />

          <input
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={changeHandler}
          />
          <button disabled={loading}>Войти</button>
        </form>
      )}
    </div>
  )
}
