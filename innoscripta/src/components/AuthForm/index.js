import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import cls from './styles.module.scss'

export const AuthForm = ({ onSubmitHandler }) => (
  <form onSubmit={onSubmitHandler}>
    <Input label="Username" id="username" name="username" required />
    <Input label="Password" id="password" name="password" type="password" required />
    <Button className={cls.button} type="submit">Login</Button>
  </form>
)

AuthForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
}
