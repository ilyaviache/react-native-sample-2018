import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import WalletHome from './HomeScreen'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletHome))
)
