redux-saga: 是一个用于管理 Redux 应用异步操作的中间件。

redux-saga 通过创建 Sagas 将所有的异步操作逻辑收集在一个地方集中处理，可以用来代替 redux-thunk 中间件。Sagas 可以被看作是在后台运行的进程。Sagas 监听发起的 action，然后决定基于这个 action 来做什么：是发起一个异步调用（比如一个 Ajax 请求），还是发起其他的 action 到 Store，甚至是调用其他的 Sagas。

*********

与 redux-thunk 比较:

* 原理不同：Sagas 不同于 Thunks，Thunks 是在 action 被创建时调用，而 Sagas 会在应用启动时调用（但初始启动的 Sagas 可能会动态调用其他 Sagas），是常驻后台的（因为 generator）。

* redux-saga 有cancel、takeLeast这些操作，这是 async 做不到的（这也是 generator 相对 async 的优势）

* redux-saga 易测试，比如它可以无阻塞地调用一个 generator（fork）、中断一个 generator （cancel）。这些特性在业务逻辑复杂的场景下非常适用。

    > 测试是指测试 action ，这个 action 之后是不是那个 action

* redux-saga 保持了 action 的原义，保持 action 的简洁，把所有有副作用的地方独立开来（这样action里会很干净）。这种特性让 redux-saga 在业务逻辑简单的场景下，也能保持代码清晰简洁。

***************

* takeLatest: 我们将执行所有操作，然后返回最后一个(the latest one)调用的结果。如果我们触发了多个时间，它只关注最后一个(the latest one)返回的结果
* takeEvery: 会返回所有已出发的调用的结果
* take: 暂停并等待action到达
* fork: 无阻塞调用
* call: 调用一个函数，如果这个函数返回一个 promise ，那么它会阻塞 saga，直到promise成功被处理
* put: 触发一个Action
* select: 启动一个选择函数，从 state 中获取数据
* 同时执行多个任务:
    
    ```js
    const [users, repos] = yield [
        call(fetch, '/users'),
        call(fetch, '/repos')
    ]
    ```    

* race: 同步执行多个 effect，然后一旦有一个完成，取消其他 effect

    ```js
    const {posts, timeout} = yield race({
        posts   : call(fetchApi, '/posts'),
        timeout : call(delay, 1000)
    })

    if(posts)
        put({type: 'POSTS_RECEIVED', posts})
    else
        put({type: 'TIMEOUT_ERROR'})
    ```

********

* Effect: 一个 effect 就是一个纯文本 JavaScript 对象，包含一些将被 saga middleware 执行的指令
* Task: 一个 task 就像是一个在后台运行的进程。在基于 redux-saga 的应用程序中，可以同时运行多个 task。通过 fork 函数来创建 task
* 阻塞调用/非阻塞调用: 
    * 阻塞调用的意思是，Saga yield 了 Effect 后会等待其执行结果返回，结果返回后才会恢复执行 Generator 中的下一个指令
    * 非阻塞调用的意思是，Saga 会在 yield Effect 之后立即恢复执行 (fork / cancel)
* Watcher/Worker: 指的是一种使用两个单独的 Saga 来组织控制流的方式。
    * Watcher: 监听发起的 action 并在每次接收到 action 时 fork 一个 worker

        ```js
        function* watcher() {
          while(true) {
            const action = yield take(ACTION)
            yield fork(worker, action.payload)
          }
        }
        ```
        
    * Worker: 处理 action 并结束它。

        ```js
        function* worker(payload) {
          // ... do some stuff
        }
        ```





