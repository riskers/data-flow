import React from 'react'
import { connect } from 'react-redux'

export default

@connect(
  state => (
    {
      list: state.listReducer
    }
  )
)
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    return(
      <div>
        <input
          value={this.state.value}
          onChange={this.props.onChange}
        />

        {JSON.stringify(this.props.list)}
      </div>
    )
  }
}