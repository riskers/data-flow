import React from 'react'
import ReactDOM from 'react-dom'
import { observable, useStrict } from 'mobx'
import { Provider, observer, inject } from 'mobx-react'

import App from 'pages/App'
import stores from './store'

useStrict(true)

ReactDOM.render(
  <Provider {...stores}>
    <div>
	    <App />
      {/* <DevTools /> */}
    </div>
  </Provider>,
	document.getElementById('app')
)