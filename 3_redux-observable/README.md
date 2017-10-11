You should understand [rxjs](https://github.com/ReactiveX/rxjs) before starting read this chapter.

I made a demo in [jsbin](https://jsbin.com/fuyaquq/edit?js,output) same as before what I used to do.You should appreciate magic of rxjs.

Then we start to learn how to using rxjs in redux application. Yeah, It's [redux-observable](https://github.com/redux-observable/redux-observable).

*****

```
      dispatch                  not match            update          update
VIEW ----------> ACTION object -----------> REDUCER --------> STORE --------> STATE
                       |                       ^
                       |                       |
                       |  match                |
                       |                       |
                       |  (data)               |
                       |                       |
                      \|     dispatch          |
                     EPICS ------------>  ACTION object
```

Epic 是 redux-observable 的核心，它是一个函数，接收 actions 流作为参数并且返回 actions 流: **Actions 入, actions 出**。返回的 actions 会通过 `store.dispatch()` 立刻被分发，所以 redux-observable 实际上会做 `epic(action$, store).subscribe(store.dispatch)`。

******

可以看到，redux-observable 和 redux-saga 的数据流是相似的。About redux-saga vs redux-observable, reference here:

* [Redux-Saga V.S. Redux-Observable](https://hackmd.io/s/H1xLHUQ8e)
* [Redux-Observable Epics vs Redux-Sagas](https://shift.infinite.red/redux-observable-epics-vs-redux-sagas-8e53610c0eda)

******