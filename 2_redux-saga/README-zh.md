[English](./README.md) | 中文

redux-saga 不用像 redux-thunk dispatch 一个 function，而是 dispatch 一个 action 对象

**********

redux-thunk:

```
      dispatch                   dispatch                  reducer
VIEW ----------> async function ----------> ACTION object ---------> DATA
```

**********

redux-saga:

```
      dispatch                  reducer
VIEW ----------> ACTION object ---------> DATA
                       |
                       |
                       |
                       | watch
                       |
                       |
                       |    dispatch                  reducer
                     SAGAS ----------> ACTION object ---------> DATA
```