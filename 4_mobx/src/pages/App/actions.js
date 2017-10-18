import * as CONST from './constants'

export const usersReducer = (state={
  loading: false,
  total: 0,
  data: [],
  error: ''
}, action) => {
  switch(action.type) {
    case CONST.FETCH_GITHUB_SEARCH_USER_LOADING:
      return {
        ...state,
        loading: true
      }
    case CONST.FETCH_GITHUB_SEARCH_USER_FAILURE:
      return {
        loading: false,
        error: action.error
      }
    case CONST.FETCH_GITHUB_SEARCH_USER_SUCCESS:
      return {
        loading: false,
        total: action.payload.total_count,
        data: action.payload.items
      }
    default:
      return state
  }
}

export const followersReducer = (state={
  loading: false,
  data: []
}, action) => {
  switch(action.type) {
    case CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case CONST.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS:
      console.log(action.payload)
      return {
        loading: false,
        data: action.payload
      }
    case CONST.FETCH_GITHUB_USER_FOLLOWERS_FAILURE:
      return {
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export const followingsReducer = (state={
  loading: false,
  data: []
}, action) => {
  switch(action.type) {
    case CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING:
      return {
        ...state,
        loading: true
      }
    case CONST.FETCH_GITHUB_USER_FOLLOWING_SUCCESS:
      return {
        loading: false,
        data: action.payload
      }
    case CONST.FETCH_GITHUB_USER_FOLLOWING_FAILURE:
      return {
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}






import * as CONST from './constants'

// simulate newwork deley
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const searchUsers = (username, page) => {
  return async dispatch => {
    dispatch({
      type: CONST.FETCH_GITHUB_SEARCH_USER_LOADING
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
}