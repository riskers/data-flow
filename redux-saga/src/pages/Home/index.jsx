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
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      userPageIndex: 1,
      followersPageIndex: 1,
      followingsPageIndex: 1
    }
  }

  onChange = v => {
    let username = v.target.value
    this.setState({
      username
    })
  }

  onSubmit = username => {
    this.props.dispatch(searchUsers(username, 1))
  }

  onSelectUser = item => {
    let username = item.login
    this.props.dispatch(getFollowers(username, this.state.followersPageIndex))
    this.props.dispatch(getFollowings(username, this.state.followingsPageIndex))
  }

  render() {

    return(
      <div>
        <input
          value={this.state.username}
          onChange={this.onChange}
        />

        <button onClick={()=>{this.onSubmit(this.state.username)}}>search</button>

        <div styleName="main">
          <div styleName="users">
            <List
              style={{cursor: 'pointer'}}
              title={`users (${this.props.users.total})`}
              data={this.props.users.data}
              loading={this.props.users.loading}
              error={this.props.users.error}
              onClickItem={this.onSelectUser}
              icon=">"
              onClickPrev={() => {
                let currentPage = this.state.userPageIndex
                if(currentPage == 1) return
                this.setState({
                  userPageIndex: currentPage - 1
                })
                this.props.dispatch(searchUsers(this.state.username, currentPage - 1))
              }}
              onClickNext={() => {
                let currentPage = this.state.userPageIndex
                this.setState({
                  userPageIndex: currentPage + 1
                })
                this.props.dispatch(searchUsers(this.state.username, currentPage + 1))
              }}
            />
          </div>

          <div styleName="followers">
            <List
              title="fllowers"
              data={this.props.followers.data}
              loading={this.props.followers.loading}
              error={this.props.followers.error}
              onClickPrev={() => {
                let currentPage = this.state.followersPageIndex
                if(currentPage == 1) return
                this.setState({
                  followersPageIndex: currentPage - 1
                })
                this.props.dispatch(getFollowers(this.state.username, currentPage - 1))
              }}
              onClickNext={() => {
                let currentPage = this.state.followersPageIndex
                this.setState({
                  followersPageIndex: currentPage + 1
                })
                this.props.dispatch(getFollowers(this.state.username, currentPage + 1))
              }}
            />
          </div>

          <div styleName="followings">
            <List
              title="followings"
              data={this.props.followings.data}
              loading={this.props.followings.loading}
              error={this.props.followings.error}
              onClickPrev={() => {
                let currentPage = this.state.followingsPageIndex
                if(currentPage == 1) return
                this.setState({
                  followingsPageIndex: currentPage - 1
                })
                this.props.dispatch(getFollowings(this.state.username, currentPage - 1))
              }}
              onClickNext={() => {
                let currentPage = this.state.followingsPageIndex
                this.setState({
                  followingsPageIndex: currentPage + 1
                })
                this.props.dispatch(getFollowings(this.state.username, currentPage + 1))
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}