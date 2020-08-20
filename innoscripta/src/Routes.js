import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages/Home'

export const useRoutes = () => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
)
