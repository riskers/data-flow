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

/* export const searchUsers = (username, page) => {
  
    dispatch({
      type: CONST.FETCH_GITHUB_SEARCH_USER
    })

    await delay(2000)

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}&page=${page}`)
      let data = await response.json()

      dispatch({
        type: CONST.FETCH_GITHUB_SEARCH_USER_SUCCESS,
        payload: data
      })
    }catch(e) {
      dispatch({
        type: CONST.FETCH_GITHUB_SEARCH_USER_FAILURE,
        error: "No This User"
      })
    }
  }
}

export const getFollowers = (username, page) => {
  return async dispatch => {
    dispatch({
      type: CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING
    })

    await delay(2000)

    try{
      const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`)
      let data = await response.json()

      dispatch({
        type: CONST.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS,
        payload: data
      })
    }catch(error) {
      dispatch({
        type: CONST.FETCH_GITHUB_USER_FOLLOWERS_FAILURE,
        error: "No This User"
      })
    }
  }
}

export const getFollowings = (username, page) => {
  return async dispatch => {
    dispatch({
      type: CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING
    })

    await delay(2000)

    try{
      const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`)
      let data = await response.json()

      dispatch({
        type: CONST.FETCH_GITHUB_USER_FOLLOWING_SUCCESS,
        payload: data
      })
    }catch(error) {
      dispatch({
        type: CONST.FETCH_GITHUB_USER_FOLLOWING_FAILURE,
        error
      })
    }
  }
} */