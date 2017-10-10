import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {
  usersReducer,
  followersReducer,
  followingsReducer
} from 'containers/App/reducers'

import AppSaga from 'containers/App/sagas'

function* rootSaga() {
  yield AppSaga()
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