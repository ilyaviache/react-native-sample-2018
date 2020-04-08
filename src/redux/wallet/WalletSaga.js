import { takeEvery, put, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import md5 from 'md5'
import * as crypto from 'crypto-js'

import { HASH_PASSWORD, setPassword, CHECK_PASSWORD, GET_SEED, setSeed, GET_KEY } from './index'
import { setKey, RESET_PASSWORD, cleanWallet, passwordError, cleanError, setPasswordSet, CHECK_PASSWORD_SET } from './WalletReducer'

const hashKey = function* (key, password) {
  const cyphertext = crypto.AES.encrypt(key, password).toString()
  yield call(AsyncStorage.setItem, 'key', cyphertext)
}

const hashPassword = function* ({ payload }) {
  let { password } = payload
  const { key } = payload
  password = md5(password)
  yield call(hashKey, key, password)
  password = md5(password)
  yield call(AsyncStorage.setItem, 'password', password)
  yield put(
    setPassword(password)
  )
}

const checkPassword = function* ({ payload }) {
  yield put(cleanError())
  const storedPassword = yield call(AsyncStorage.getItem, 'password')
  let password = md5(payload)
  password = md5(password)
  if (password === storedPassword) {
    yield put(
      setPassword(password)
    )
    return
  }
  yield put(passwordError('notifications.password_incorrect'))
}

const getSeed = function* () {
  // TODO: add API get call to seed
  const seed = 'asdsadsa asds asd a dasd asd'
  yield put(
    setSeed(seed)
  )
}

const checkPasswordSet = function* () {
  const password = yield call(AsyncStorage.getItem, 'password')
  yield put(setPasswordSet(!!password))
}

const getKey = function* () {
  // TODO: add POST call with seed to get key
  const key = 'asdkljsadkjsakldjsakldjsa'
  yield put(
    setKey(key)
  )
}

const resetPassword = function* () {
  yield call(AsyncStorage.removeItem, 'key')
  yield call(AsyncStorage.removeItem, 'password')
  yield put(cleanWallet())
}

export default function* () {
  yield takeEvery(HASH_PASSWORD, hashPassword)
  yield takeEvery(CHECK_PASSWORD, checkPassword)
  yield takeEvery(GET_SEED, getSeed)
  yield takeEvery(GET_KEY, getKey)
  yield takeEvery(RESET_PASSWORD, resetPassword)
  yield takeEvery(CHECK_PASSWORD_SET, checkPasswordSet)
}