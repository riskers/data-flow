[English](./README.md) | 中文

redux-saga 不用像 redux-thunk dispatch 一个 function，而是 dispatch 一个 action 对象

redux-thunk:

```
VIEW ----> ACTION ----> DATA
```

redux-saga:

```
VIEW ----> ACTION ----> SAGAS ----> DATA
```