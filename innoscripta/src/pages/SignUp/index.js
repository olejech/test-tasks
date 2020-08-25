import React, { memo, useState } from 'react'
import { EmptyLayout } from 'layouts/EmptyLayout'
import { AuthForm } from 'components/AuthForm'
import { connect } from 'react-redux'
import { signUp } from 'store/auth/actions'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import cls from './styles.module.scss'

const SignInPage = memo(({ signUp }) => {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const onChangeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const signUpHandler = async e => {
    e.preventDefault()
    try {
      await signUp(form)
      history.push('/signin')
    } catch (e) {}
  }

  return (
    <EmptyLayout>
      <h1 className={cls.title}>Sign up</h1>
      <AuthForm buttonText="Create" onChangeHandler={onChangeHandler} onSubmitHandler={signUpHandler} />
    </EmptyLayout>
  )
})

SignInPage.propTypes = {
  signUp: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  signUp,
}

export default connect(null, mapDispatchToProps)(SignInPage)
