import test from 'ava'
import { call, put } from 'redux-saga/effects'
import * as CONST from './constants'
import axios from 'axios'
import {
  delay,
  searchUsers,
  getFollowers,
  getFollowings
} from './sagas'

test('search users test', t => {

  let username = 'riskers',
      page = 1

  let mockData = {
    a: 1
  }

  const gen = searchUsers({
    payload: {
      username,
      page
    }
  })

  t.deepEqual(
    gen.next().value,
    put({
      type: CONST.FETCH_GITHUB_SEARCH_USER_LOADING
    })
  )

  t.deepEqual(
    gen.next().value,
    call(delay, 2000)
  )

  t.deepEqual(
    gen.next().value,
    call(axios.get, `https://api.github.com/search/users?q=${username}&page=${page}`)
  )

  t.deepEqual(
    gen.next({
      data: mockData
    }).value,
    put({
      type: CONST.FETCH_GITHUB_SEARCH_USER_SUCCESS,
      payload: mockData
    })
  )
})

test('search fetch followers', t => {

  let username = 'riskers',
      page

  let mockData = {
    a: 1
  }

  const gen = getFollowers({
    payload: {
      username,
      page
    }
  })

  t.deepEqual(
    gen.next().value,
    put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWERS_LOADING
    })
  )

  t.deepEqual(
    gen.next().value,
    call(delay, 2000)
  )

  t.deepEqual(
    gen.next().value,
    call(axios.get,`https://api.github.com/users/${username}/followers?page=${page}`)
  )

  t.deepEqual(
    gen.next({
      data: mockData
    }).value,
    put({
      type: CONST.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS,
      payload: mockData
    })
  )
})

test('search fetch followings', t => {
  
    let username = 'riskers',
        page
  
    let mockData = {
      a: 1
    }
  
    const gen = getFollowings({
      payload: {
        username,
        page
      }
    })
  
    t.deepEqual(
      gen.next().value,
      put({
        type: CONST.FETCH_GITHUB_USER_FOLLOWING_LOADING
      })
    )
  
    t.deepEqual(
      gen.next().value,
      call(delay, 2000)
    )
  
    t.deepEqual(
      gen.next().value,
      call(axios.get,`https://api.github.com/users/${username}/following?page=${page}`)
    )
  
    t.deepEqual(
      gen.next({
        data: mockData
      }).value,
      put({
        type: CONST.FETCH_GITHUB_USER_FOLLOWING_SUCCESS,
        payload: mockData
      })
    )
  })
  