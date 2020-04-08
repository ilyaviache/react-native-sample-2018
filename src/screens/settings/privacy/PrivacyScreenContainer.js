import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { changeLocale } from '../../../redux/settings'

import SettingsPrivacy from './PrivacyScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {
  changeLocale
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(SettingsPrivacy))
)