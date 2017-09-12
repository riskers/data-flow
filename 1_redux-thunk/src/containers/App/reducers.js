import * as constants from './constants'

export const listReducer = (state=[], action) => {
  switch(action.type) {
    case constants.FETCH_GITHUB_USER_PROFILE_SUCCESS:
      return {
        ...state
      }
    default:
      return state
  }
}