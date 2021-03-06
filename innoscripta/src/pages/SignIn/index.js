import React, { memo, useCallback, useState } from 'react'
import { EmptyLayout } from 'layouts/EmptyLayout'
import { AuthForm } from 'components/AuthForm'
import { useHistory } from 'react-router-dom'
import { signIn } from 'store/auth/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

const SignInPage = memo(({ signIn }) => {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const onChangeHandler = useCallback(event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }, [form])

  const signInHandler = useCallback(async e => {
    e.preventDefault()
    try {
      await signIn(form)
      history.push('/')
    } catch (e) {}
  }, [signIn, form, history])

  return (
    <EmptyLayout>
      <h1 className={cls.title}>Sign in</h1>
      <AuthForm buttonText="Login" onSubmitHandler={signInHandler} onChangeHandler={onChangeHandler} />
    </EmptyLayout>
  )
})

SignInPage.propTypes = {
  signIn: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  signIn,
}

export default connect(null, mapDispatchToProps)(SignInPage)
