import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import SettingsPassword from './PasswordScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {

}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(SettingsPassword))
)