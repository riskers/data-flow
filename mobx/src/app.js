import React from 'react'
import Home from 'pages/Home'
import { observable, useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'
import stores from './store'

useStrict(true)

const App = () => {
  return (
    <Provider {...stores}>
      <Home />
    </Provider>
  )
}

export default hot(module)(App)