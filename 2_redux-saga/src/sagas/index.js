import AppSaga from 'containers/App/sagas'

export default function* rootSaga() {
  yield [
    AppSaga()
  ]
}