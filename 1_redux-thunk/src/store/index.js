import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { listReducer } from 'containers/App/reducers'

const reducer = combineReducers({
  listReducer
})

const configureStore = () => createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default configureStore