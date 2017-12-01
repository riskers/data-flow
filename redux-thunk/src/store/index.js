import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import AppReducer from 'containers/App/reducers'

const reducer = combineReducers({
  AppReducer
})

const configureStore = () => createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default configureStore