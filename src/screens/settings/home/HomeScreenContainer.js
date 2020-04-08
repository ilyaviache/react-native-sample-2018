import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { changeTheme } from '../../../redux/settings'

import SettingsHome from './HomeScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {
  changeTheme
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(SettingsHome))
)
