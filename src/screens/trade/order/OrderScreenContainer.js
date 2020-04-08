import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'

import { getThemeValue } from '../../../redux/settings'

import TradeOrder from './OrderScreen'

const mapStateToProps = state => (
  {
    themeValue: getThemeValue(state.settings)
  }
)

export default withNavigation(
  withTheme(
    connect(mapStateToProps)(TradeOrder)
  )
)
