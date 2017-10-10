import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {
  usersReducer,
  followersReducer,
  followingsReducer
} from 'containers/App/reducers'

const reducer = combineReducers({
  usersReducer,
  followersReducer,
  followingsReducer
})

const configureStore = () => createStore(
  reducer,
  composeEnhancers(

  )
)

export default configureStore