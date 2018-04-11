import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader'
import Home from 'pages/Home'
import Test from 'pages/Test'

import './global.css'

const activeStyle = {
  color: '#d0021b',
  textDecoration: 'underline'
}

const App = () => {
  return (
    <Router>
      <div>
        <nav styleName="nav">
          <NavLink to="/" styleName="link" exact activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/test" styleName="link" activeStyle={activeStyle}>Test</NavLink>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  )
}

export default hot(module)(App)