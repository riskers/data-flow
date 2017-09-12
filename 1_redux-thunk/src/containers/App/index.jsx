import React from 'react'
import { connect } from 'react-redux'
import Loading from 'components/Loading'

import './style.css'

import {
  searchUsers,
  getFollowers
} from './actions'

export default
@connect(
  state => (
    {
      users: state.usersReducer,
      followers: state.followersReducer
    }
  )
)
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  onChange = v => {
    let username = v.target.value
    this.setState({
      username
    })
  }

  onSubmit = () => {
    let username = this.state.username
    this.props.dispatch(searchUsers(username))
  }

  renderList(info) {

    let {
      data: list,
      loading,
      error
    } = info

    if(loading) {
      return <Loading />
    }

    if(error) {
      return <span>{error}</span>
    }

    return list && list.map(e => {
      return <li key={e.id}>
        <img src={e.avatar_url} styleName="pic"/>
        {e.login}
      </li>
    })
  }

  render() {
    return(
      <div>
        <input
          value={this.state.username}
          onChange={this.onChange}
        />

        <button onClick={this.onSubmit}>submit</button>

        <ul>
          {this.renderList(this.props.users)}
        </ul>

      </div>
    )
  }
}