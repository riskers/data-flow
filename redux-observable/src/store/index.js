import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {
  usersReducer,
  followersReducer,
  followingsReducer
} from 'pages/Home/reducers'

import {
  searchUsersEpic,
  getFollowersEpic,
  getFollowingsEpic
} from 'pages/Home/epics'

const rootEpic = combineEpics(
  searchUsersEpic,
  getFollowersEpic,
  getFollowingsEpic
)

const epicMiddleware = createEpicMiddleware(rootEpic)

const reducer = combineReducers({
  usersReducer,
  followersReducer,
  followingsReducer
})

const configureStore = () => createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

export default configureStore