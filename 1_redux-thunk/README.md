## redux-thunk + async

This is a simplest redux method for asynchronous operation.

It can use like-synchronous way to write asynchronous coding.Because of [redux-thunk](https://github.com/gaearon/redux-thunk), you can async dispatch and await asynchronous operation:

```
      dispatch                                    dispatch                  reducer
VIEW ----------> function(return async dispatch) ----------> ACTION object ---------> DATA
|
|
|
| dispatch                  reducer
|----------> ACTION object ---------> DATA
```

> VIEW 会 dispatch 一个 action object 或一个高阶函数（返回 async function）
> 当 dispatch 一个 action object 时，reducer 会更新数据
> 当 dispatch 一个函数时，就可以在里面做各种异步操作（利用 await）

```js
// action creators
const getUsers = username => {
  async dispatch => {
    dispatch({
      type: 'LOADING'
    })

    try{
      const response = await fetch(`https://example.com/`)
      let data = await response.json()

      dispatch({
        type: 'SUCCESS',
        payload: data
      })
    }catch(error) {
      dispatch({
        type: 'FAILURE',
        error: error
      })
    }
  }
}
```
