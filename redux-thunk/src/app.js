import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import Home from 'pages/Home'

const App = () => {
  return (
    <Home/>
  )
}

export default hot(module)(App)