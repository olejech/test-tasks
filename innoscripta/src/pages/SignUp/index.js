import React from 'react'
import { EmptyLayout } from 'layouts/EmptyLayout'
import { AuthForm } from 'components/AuthForm'
import cls from './styles.module.scss'

export const SignUp = () => {
  const signUp = e => {
    e.preventDefault()
  }

  return (
    <EmptyLayout>
      <h1 className={cls.title}>Sign up</h1>
      <AuthForm onSubmitHandler={signUp} />
    </EmptyLayout>
  )
}
