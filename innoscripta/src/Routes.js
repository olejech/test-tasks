import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'
import CartPage from 'pages/Cart'

export const useRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/cart" component={CartPage} />
  </Switch>
)
