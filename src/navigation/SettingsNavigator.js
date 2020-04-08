import { StackNavigator } from 'react-navigation'

import { getNavigationHeader } from '../utils/navigation'

import SettingsHome from '../screens/settings/home/HomeScreenContainer'
import SettingsLanguage from '../screens/settings/language/LanguageScreenContainer'
import SettingsCurrency from '../screens/settings/currency/CurrencyScreenContainer'
import SettingsPassword from '../screens/settings/password/PasswordScreenContainer'
import SettingsAddToken from '../screens/settings/token/AddTokenScreenContainer'
import SettingsManualToken from '../screens/settings/token/ManualTokenScreenContainer'
import SettingsTerms from '../screens/settings/terms/TermsScreenContainer'
import SettingsFAQ from '../screens/settings/faq/FAQScreenContainer'
import SettingsPrivacy from '../screens/settings/privacy/PrivacyScreenContainer'

export default StackNavigator({ 
  SettingsHome: {
    screen: SettingsHome
  },
  SettingsLanguage: {
    screen: SettingsLanguage
  },
  SettingsCurrency: {
    screen: SettingsCurrency
  },
  SettingsPassword: {
    screen: SettingsPassword
  },
  SettingsAddToken: {
    screen: SettingsAddToken
  },
  SettingsManualToken: {
    screen: SettingsManualToken
  },
  SettingsTerms: {
    screen: SettingsTerms
  },
  SettingsFAQ: {
    screen: SettingsFAQ
  },
  SettingsPrivacy: {
    screen: SettingsPrivacy
  }
},
  {
    navigationOptions: (props) => (
      getNavigationHeader(props)
    )
  })
