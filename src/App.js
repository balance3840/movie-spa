import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  )
}

export default hot(module)(App)
