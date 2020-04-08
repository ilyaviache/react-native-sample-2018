import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { changeCurrency } from '../../../redux/settings'

import SettingsCurrency from './CurrencyScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {
  changeCurrency
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(SettingsCurrency))
)