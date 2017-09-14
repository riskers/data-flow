[English](./README.md) | 中文

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

