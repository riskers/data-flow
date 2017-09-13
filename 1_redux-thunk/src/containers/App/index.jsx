import React from 'react'
import { connect } from 'react-redux'
import Loading from 'components/Loading'
import List from 'components/List'

import './style.css'

import {
  searchUsers,
  getFollowers,
  getFollowings
} from './actions'

export default
@connect(
  state => (
    {
      users: state.usersReducer,
      followers: state.followersReducer,
      followings: state.followingsReducer
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

  onSubmit = username => {
    this.props.dispatch(searchUsers(username))
  }

  onSelectUser = item => {
    let username = item.login
    this.props.dispatch(getFollowers(username))
    this.props.dispatch(getFollowings(username))
  }

  render() {
    return(
      <div>
        <input
          value={this.state.username}
          onChange={this.onChange}
        />

        <button onClick={()=>{this.onSubmit(this.state.username)}}>submit</button>

        <div styleName="main">
          {
            this.props.users.data.length != 0 && <div styleName="users">
              <List
                style={{cursor: 'pointer'}}
                title={`users (${this.props.users.total})`}
                data={this.props.users.data}
                loading={this.props.users.loading}
                error={this.props.users.error}
                onClickItem={this.onSelectUser}
              />
            </div>
          }

          {
            this.props.followers.data.length != 0 && <div styleName="followers">
              <List
                title="fllowers"
                data={this.props.followers.data}
                loading={this.props.followers.loading}
                error={this.props.followers.error}
              />
            </div>
          }

          {
            this.props.followings.data.length != 0 && <div styleName="followings">
              <List
                title="followings"
                data={this.props.followings.data}
                loading={this.props.followings.loading}
                error={this.props.followings.error}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}