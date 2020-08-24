import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import CartPage from 'pages/Cart'
import CheckoutPage from 'pages/Checkout'

export const useRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
  </Switch>
)
