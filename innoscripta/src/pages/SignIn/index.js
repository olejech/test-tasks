import React from 'react'
import { EmptyLayout } from 'layouts/EmptyLayout'
import { AuthForm } from 'components/AuthForm'
import cls from './styles.module.scss'

export const SignIn = () => {
  const signIn = e => {
    e.preventDefault()
  }

  return (
    <EmptyLayout>
      <h1 className={cls.title}>Sign in</h1>
      <AuthForm onSubmitHandler={signIn} />
    </EmptyLayout>
  )
}
