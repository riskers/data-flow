[MobX](https://github.com/mobxjs/mobx)

a simple MobX [demo](https://stackblitz.com/edit/react-sbgkk6)

************

MobX Tips:

* when setting `useStrict(true)`, only `@action` can modify observable value
* async function using `runInAction`

************

MobX + React:

* @observable
* @action / useStrict / runInAction(async)
* @computed
* @inject / @observer / Provider

```
                            modify                    update                    trigger
Events ----->  Actions  ------------->     State     --------> Computed values ---------->  Reactions
              (@action)                (@observable)             (@computed)               (@observer)
                 ^                                                                              |
                 |                                                                              |
                 |                                 (mobx-react)                                 |
                 |------------------------------------------------------------------------------|

```

************

## MobX vs Redux

[MobX vs Redux: Comparing the Opposing Paradigms](https://www.youtube.com/watch?v=76FRrbY18Bs) 演讲已经介绍，不能看视频的看 [MobX vs Redux: Comparing the Opposing Paradigms - React Conf 2017 纪要](https://zhuanlan.zhihu.com/p/25989654) 也是可以的。


* Redux 是单一数据源，而 MobX 是多个 store (MobX 可以根据应用的 UI、数据或业务逻辑来组织 store)
* Redux state 是只读的，只能通过将之前的 state 与触发的 action 结合，产生新的 state，因此是纯净的（pure）。而 MobX 的 state 即可读又可写，action 是非必须的，可以直接赋值改变，因此是不纯净的（Impure）
* Redux 需要你去规范化你的 state，Immutable 数据使 Reducer 在更新时需要将状态树的祖先数据进行复制和更新，新的对象会导致与之 connect 的所有 UI 组件都重复渲染。因此Redux state 不建议进行深层嵌套，或者需要我们在组件中用 shouldComponentUpdate 优化。而 MobX 只自动更新你所关心的，不必担心嵌套带来的重渲染问题。
* 在 Redux 中区分有 smart 组件与 dumb 组件，dumb 负责展示，smart 负责状态更新，数据获取。而在 MobX 中无需区分，都是 smart，当组件自身依赖的 observable 发生变化时，会作出响应。
* 没有中间件机制，没法通过 magic 加快工作效率（这里 magic 是指 action 分发到 reducer 的过程）

* 优点
  * MobX相对于Redux更易学习、上手
  * MobX的写法也十分简洁直观，并且相对于Redux，接入React项目时侵入感更低，相应的，改造老项目的成本也会减少很多
  * MobX修改状态方便自然，不需要额外的语法成本，也不需要始终返回一个新的状态，而是直接操作状态
  * MobX提供了computed等非常好用的特性，可以更高性能、更简单的组合多个状态
* 缺点
  * 允许随意修改store，于方便来说这是优点，但是这也使得状态不那么安全稳定，不过MobX也提供了严格模式，该模式下，也只有action可以对状态进行修改。所以我们可以依据项目的不同自由的平衡状态安全和快速开发
  * 社区环境上MobX也远比不上Redux，这也是目前在国内不火的重要原因