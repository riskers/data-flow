[English](README.md) | 中文

[redux-saga](https://github.com/redux-saga/redux-saga) simplify action creators that return action onject. Once trigger the action that sagas watch, sagas will operate series of [effects](https://redux-saga.js.org/docs/basics/DeclarativeEffects.html) then dispatch(example by `put`) action:

```
      dispatch                  not watch            update          update
VIEW ----------> ACTION object -----------> REDUCER --------> STORE --------> STATE
                       |                       ^
                       |                       |
                       |  watch                |
                       |                       |
                       |  (data)               |
                       |                       |
                      \|     dispatch          |
                     SAGAS ------------>  ACTION object
```

VIEW dispatch 一个 ACTION object:

* 这个 ACTION object 没有被 sagas 监听，则 reducer 会更新数据
* 这个 ACTION object 被 sagas 监听，则走入 sagas 的流程，在 sagas 中 dispatch ACTION object，reducer 更新数据

*********

与 redux-thunk 比较:

* 原理不同：Sagas 不同于 Thunks，Thunks 是在 action 被创建时调用，而 Sagas 会在应用启动时调用（但初始启动的 Sagas 可能会动态调用其他 Sagas），是常驻后台的（因为 generator）。

* redux-saga 有cancel、takeLeast这些操作，这是 async 做不到的（这也是 generator 相对 async 的优势）

* redux-saga 易测试，比如它可以无阻塞地调用一个 generator（fork）、中断一个 generator （cancel）。这些特性在业务逻辑复杂的场景下非常适用。

    > 测试是指测试 action ，这个 action 之后是不是那个 action

* redux-saga 保持了 action 的原义，保持 action 的简洁，把所有有副作用的地方独立开来（这样action里会很干净）。这种特性让 redux-saga 在业务逻辑简单的场景下，也能保持代码清晰简洁。

*********

## Test

[sagas.test.js](src/containers/App/sagas.test.js)

因为测试了 sagas ，所以使用了 axios

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