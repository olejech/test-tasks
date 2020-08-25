import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import cls from './styles.module.scss'

export const AuthForm = memo(({ buttonText, onChangeHandler, onSubmitHandler }) => (
  <form onSubmit={onSubmitHandler}>
    <Input label="Username:" id="username" name="username" onChange={onChangeHandler} required />
    <Input label="Password:" id="password" name="password" type="password" onChange={onChangeHandler} required />
    <Button className={cls.button} type="submit">{buttonText}</Button>
  </form>
))

AuthForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
}
