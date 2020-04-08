import I18n from 'react-native-i18n'

// Import all locales
import cn from './cn.json'
import en from './en.json'
import ru from './ru.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true

// Define the supported translations
I18n.translations = {
  cn,
  en,
  ru
}

// The method we'll use instead of a regular string
export function t(name, params = {}) {
  return I18n.t(name, params)
}

export default I18n