import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { ProfilePage } from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'
import { AuthContext } from './context/auth/AuthContext'
import { Loader } from './components/Loader'
import { NotFound } from './pages/NotFound'

export const Routes = () => {
  const { auth, ready } = useContext(AuthContext)

  if (!ready) {
    return <Loader />
  }

  if (auth.token) {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="" component={NotFound} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="" component={NotFound} />
    </Switch>
  )
}
