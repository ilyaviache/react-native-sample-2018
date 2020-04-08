import { fork } from 'redux-saga/effects'
// import { startupSaga } from './startup'
import { settingsSaga } from './settings'
import { tradeSaga } from './trade'
import { walletSaga } from './wallet'

const rootSaga = function* rootSaga() {
  // yield fork(startupSaga)
  yield fork(settingsSaga)
  yield fork(tradeSaga)
  yield fork(walletSaga)
}

export default rootSaga
