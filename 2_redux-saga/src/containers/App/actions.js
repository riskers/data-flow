import * as CONST from './constants'

// simulate newwork deley
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const searchUsers = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_SEARCH_USER,
    payload: {
      username,
      page
    }
  }
}

export const getFollowers = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWERS,
    payload: {
      username,
      page
    }
  }
}

export const getFollowings = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWING,
    payload: {
      username,
      page
    }
  }
}
