import clickTimes from './clickTimesStore'

const stores = {
  clickTimes
}

export default stores

// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// import {
//   usersReducer,
//   followersReducer,
//   followingsReducer
// } from 'containers/App/reducers'

// const reducer = combineReducers({
//   usersReducer,
//   followersReducer,
//   followingsReducer
// })

// const configureStore = () => createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(thunk)
//   )
// )

// export default configureStore