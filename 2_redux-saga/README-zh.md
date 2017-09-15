[English](./README.md) | 中文

[redux-saga](https://github.com/redux-saga/redux-saga) simplify action creators that return action onject. Once trigger the action that sagas watch, sagas will operate series of [effects](https://redux-saga.js.org/docs/basics/DeclarativeEffects.html) then dispatch(example by `put`) action:

```
      dispatch                                     update          update
VIEW ----------> ACTION object ---------> REDUCER --------> STORE --------> STATE
                       |                     ^
                       |                     |
                       |                     |
                       | watch               |
                       |                     |
                       |                     |
                       |    dispatch         |
                     SAGAS ----------> ACTION object
```

VIEW dispatch 一个 ACTION object:

* 这个 ACTION object 没有被 sagas 监听，则 reducer 会更新数据
* 这个 ACTION object 被 sagas 监听，则走入 sagas 的流程，在 sagas 中 dispatch ACTION object，reducer 更新数据

*********

## test



*********

```js
// action.js
export const searchUsers = (username, page) => {
  return {
    type: CONST.FETCH_GITHUB_SEARCH_USER,
    payload: {
      username,
      page
    }
  }
}
```

```js
// App/sagas.js
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
  yield takeLatest(CONST.FETCH_GITHUB_SEARCH_USER, fetchUsers)
}
```

```js
// sagas/index.js
import AppSaga from 'containers/App/sagas'

export default function* rootSaga() {
  yield AppSaga()
}
```