import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {
  usersReducer,
  followersReducer,
  followingsReducer
} from 'pages/Home/reducers'

import HomeSaga from 'pages/Home/sagas'

function* rootSaga() {
  yield HomeSaga()
}

const reducer = combineReducers({
  usersReducer,
  followersReducer,
  followingsReducer
})

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore