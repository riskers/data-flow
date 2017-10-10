import { Observable } from 'rxjs'
import * as CONST from './constants'
import * as actions from './actions'

const request = url => new Promise((resolve, reject) => {
	fetch(url)
		.then(res => resolve(res.json()))
		.catch(err => reject(err))
})

const searchUsers$ = (username, page) => Observable.fromPromise(request(`https://api.github.com/search/users?q=${username}&page=${page}`)).delay(2000)
const followers$ = (username, page) => Observable.fromPromise(request(`https://api.github.com/users/${username}/followers?page=${page}`)).delay(2000)
const followings$ = (username, page) => Observable.fromPromise(request(`https://api.github.com/users/${username}/following?page=${page}`)).delay(2000)

export const searchUsersEpic = action$ => {
  return action$
    .ofType(CONST.FETCH_GITHUB_SEARCH_USER_LOADING)
    .mergeMap(e => {
      return searchUsers$(e.payload.username, e.payload.page)
        .map(list => actions.searchUsersSuccess(list))
        .catch(error => actions.searchUsersFailure())
    })
}

export const getFollowersEpic = action$ => {
  return action$
    .ofType(CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING)
    .mergeMap(e => {
      return followers$(e.payload.username, e.payload.page)
        .map(list => actions.getFollowersSuccess(list))
        .catch(error => actions.getFollowersFailure())
    })
}

export const getFollowingsEpic = action$ => {
  return action$
    .ofType(CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING)
    .mergeMap(e => {
      return followings$(e.payload.username, e.payload.page)
        .map(list => actions.getFollowingsSuccess(list))
        .catch(error => actions.getFollowingsFailure(error))
    })
}