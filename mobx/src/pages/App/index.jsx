import React from 'react'
import Loading from 'components/Loading'
import List from 'components/List'
import { observer, inject } from 'mobx-react'

import './style.css'

@inject('usersStore', 'followersStore', 'followingsStore')
@observer
export default
class App extends React.Component {
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
    this.props.usersStore.searchUsers(username, 1)
  }

  onSelectUser = item => {
    let username = item.login
    this.props.followersStore.getFollowers(username, this.state.followersPageIndex)
    this.props.followingsStore.getFollowings(username, this.state.followersPageIndex)
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
              title={`users (${this.props.usersStore.total})`}
              data={this.props.usersStore.data}
              loading={this.props.usersStore.loading}
              error={this.props.usersStore.error}
              onClickItem={this.onSelectUser}
              icon=">"
              onClickPrev={() => {
                let currentPage = this.state.userPageIndex
                if(currentPage == 1) return
                this.setState({
                  userPageIndex: currentPage - 1
                })
                this.props.usersStore.searchUsers(this.state.username, currentPage - 1)
              }}
              onClickNext={() => {
                let currentPage = this.state.userPageIndex
                this.setState({
                  userPageIndex: currentPage + 1
                })
                this.props.usersStore.searchUsers(this.state.username, currentPage + 1)
              }}
            />
          </div>

          <div styleName="followers">
            <List
              title="fllowers"
              data={this.props.followersStore.data}
              loading={this.props.followersStore.loading}
              error={this.props.followersStore.error}
              onClickPrev={() => {
                let currentPage = this.state.followersPageIndex
                if(currentPage == 1) return
                this.setState({
                  followersPageIndex: currentPage - 1
                })
                this.props.followersStore.getFollowers(this.state.username, currentPage - 1)
              }}
              onClickNext={() => {
                let currentPage = this.state.followersPageIndex
                this.setState({
                  followersPageIndex: currentPage + 1
                })
                this.props.followersStore.getFollowers(this.state.username, currentPage + 1)
              }}
            />
          </div>

          <div styleName="followings">
            <List
              title="followings"
              data={this.props.followingsStore.data}
              loading={this.props.followingsStore.loading}
              error={this.props.followingsStore.error}
              onClickPrev={() => {
                let currentPage = this.state.followingsPageIndex
                if(currentPage == 1) return
                this.setState({
                  followingsPageIndex: currentPage - 1
                })
                this.props.followingsStore.getFollowings(this.state.username, currentPage - 1)
              }}
              onClickNext={() => {
                let currentPage = this.state.followingsPageIndex
                this.setState({
                  followingsPageIndex: currentPage + 1
                })
                this.props.followingsStore.getFollowings(this.state.username, currentPage + 1)
              }}
            />
          </div>

        </div>

      </div>
    )
  }
}
