import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import CartPage from 'pages/Cart'
import ProfilePage from 'pages/Profile'
import CheckoutPage from 'pages/Checkout'
import SignInPage from 'pages/SignIn'
import SignUpPage from 'pages/SignUp'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Redirect to="/signin" />
    </Switch>
  )
}
