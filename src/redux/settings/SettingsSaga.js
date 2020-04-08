
import { takeEvery } from 'redux-saga/effects'
import I18n from 'react-native-i18n'
import { CHANGE_LOCALE } from './index'

const changeLocale = function* (action) {
  I18n.locale = action.payload
}

export default function*() {
  yield takeEvery(CHANGE_LOCALE, changeLocale)
}