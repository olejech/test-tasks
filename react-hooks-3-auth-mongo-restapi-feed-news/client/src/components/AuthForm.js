import React from 'react'
import { Loader } from './Loader'

export const AuthForm = ({
  loading,
  submitLoginHandler,
  submitRegisterHandler,
  changeHandler
}) => {
  return (
    <>
      <h2>Авторизация / Регистрация</h2>
      {loading ? (
        <Loader />
      ) : (
        <form className="form">
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
          <div className="buttons">
            <button disabled={loading} onClick={submitLoginHandler}>
              Войти
            </button>
            <button disabled={loading} onClick={submitRegisterHandler}>
              Регистрация
            </button>
          </div>
        </form>
      )}
    </>
  )
}
