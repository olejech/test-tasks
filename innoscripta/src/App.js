import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'Routes'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useAutoSignIn } from 'hooks/useAutoSignIn'

function App({ token }) {
  const routes = useRoutes(!!token)
  const ready = useAutoSignIn()

  if (!ready) return null
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

App.propTypes = {
  token: PropTypes.string,
}

App.defaultProps = {
  token: '',
}

const mapStateToProps = state => ({
  token: state.auth.token,
})

export default connect(mapStateToProps)(App)
