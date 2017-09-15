import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as CONST from './constants'

// simulate newwork deley
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const searchUsers = function*(action) {
  let {
    username,
    page
  } = action.payload

  yield put({
    type: CONST.FETCH_GITHUB_SEARCH_USER_LOADING
  })

  yield call(delay, 2000)

  try {
    let response = yield call(fetch, `https://api.github.com/search/users?q=${username}&page=${page}`)
    let data = yield response.json()

    yield put({
      type: CONST.FETCH_GITHUB_SEARCH_USER_SUCCESS,
      payload: data
    })
  }catch(e) {
    yield put({
      type: CONST.FETCH_GITHUB_SEARCH_USER_FAILURE,
      error: "No This User"
    })
  }
}

const getFollowers = function*(action) {
  let {
    username,
    page
  } = action.payload

  yield put({
    type: CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING
  })

  yield call(delay, 2000)

  try{
    let response = yield call(fetch,`https://api.github.com/users/${username}/followers?page=${page}`)
    let data = yield response.json()

    yield put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS,
      payload: data
    })
  }catch(error) {
    yield put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWERS_FAILURE,
      error: "No This User"
    })
  }
}

const getFollowings = function*(action) {
  let {
    username,
    page
  } = action.payload

  yield put({
    type: CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING
  })

  yield call(delay, 2000)

  try{
    let response = yield call(fetch,`https://api.github.com/users/${username}/following?page=${page}`)
    let data = yield response.json()

    yield put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWING_SUCCESS,
      payload: data
    })
  }catch(error) {
    yield put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWING_FAILURE,
      error: "No This User"
    })
  }
}

export default function* () {
  yield takeLatest(CONST.FETCH_GITHUB_SEARCH_USER, searchUsers)
  yield takeLatest(CONST.FETCH_GITHUB_USER_FOLLOWERS, getFollowers)
  yield takeLatest(CONST.FETCH_GITHUB_USER_FOLLOWING, getFollowings)
}