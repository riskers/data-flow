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