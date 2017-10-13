import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App'

import { observable } from 'mobx'
import { Provider, observer, inject } from 'mobx-react'

import stores from './store'

@inject('clickTimes')
@observer
class Counter extends React.Component {

  constructor(props) {
    super(props)
  }

	onInc = () => {
    this.props.clickTimes.inc()
	}

	onDec = () => {
    this.props.clickTimes.dec()
	}

	render() {
		return <div>
			<p>Count: {this.props.clickTimes.times}</p>
			<button onClick={this.onInc}> + </button>
			<button onClick={this.onDec}> - </button>
		</div>
	}
}

ReactDOM.render(
  <Provider {...stores}>
	  <Counter />
  </Provider>,
	document.getElementById('app')
)

// ReactDOM.render(
//     <App/>
//   ,
//   document.getElementById('app')
// )