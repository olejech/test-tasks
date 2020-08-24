import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import CartPage from 'pages/Cart'
import CheckoutPage from 'pages/Checkout'
import { SignIn } from 'pages/SignIn'
import { SignUp } from 'pages/SignUp'

export const useRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/cart" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
)
