## redux-thunk + async

This is a simplest redux method for asynchronous operation.

It can use like-synchronous way to write asynchronous coding.Because of [redux-thunk](https://github.com/gaearon/redux-thunk), you can async dispatch and await asynchronous operation:

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
