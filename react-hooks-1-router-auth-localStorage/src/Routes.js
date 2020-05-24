import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { ProfilePage } from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'
import { AuthContext } from './context/auth/AuthContext'
import { LogoutPage } from './pages/LogoutPage'

export const Routes = () => {
  const { auth } = useContext(AuthContext)

  return (
    <>
      {auth.token ? (
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/news" component={NewsPage} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/news" component={NewsPage} />
          <Redirect to="/login" />
        </Switch>
      )}
    </>
  )
}
