import React from 'react'
import { Nav } from './components/Nav'
import { AuthState } from './context/auth/AuthState'
import { Routes } from './Routes'

function App() {
  return (
    <AuthState>
      <div className="container">
        <Nav />
        <Routes />
      </div>
    </AuthState>
  )
}

export default App
