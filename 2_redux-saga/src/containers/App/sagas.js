import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as CONST from './constants'

// simulate newwork deley
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* fetchUsers(action) {

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

export default function* () {
  yield [
    takeLatest('FETCH_GITHUB_SEARCH_USER', fetchUsers)
  ]
}