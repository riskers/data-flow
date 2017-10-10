import * as CONST from './constants'

export const searchUsers = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_SEARCH_USER_LOADING,
    payload: {
      username,
      page
    }
  }
}

export const searchUsersSuccess = list => {
  return {
    type: CONST.FETCH_GITHUB_SEARCH_USER_SUCCESS,
    payload: {
      total_count: list.total_count,
      items: list.items
    }
  }
}

export const searchUsersFailure = () => {
  return {
    type: CONST.FETCH_GITHUB_SEARCH_USER_FAILURE,
    error: "No This User"
  }
}

export const getFollowers = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING,
    payload: {
      username,
      page
    }
  }
}

export const getFollowersSuccess = data => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS,
    payload: data
  }
}

export const getFollowersFailure = () => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWERS_FAILURE,
    error: "No This User"
  }
}

export const getFollowings = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING,
    payload: {
      username,
      page
    }
  }
}

export const getFollowingsSuccess = data => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWING_SUCCESS,
    payload: data
  }
}

export const getFollowingsFailure = error => {
  return {
    type: CONST.FETCH_GITHUB_USER_FOLLOWING_FAILURE,
    error
  }
}
