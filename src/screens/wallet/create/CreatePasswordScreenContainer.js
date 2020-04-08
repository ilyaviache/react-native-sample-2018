import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { hashPassword, selectKey } from '../../../redux/wallet'
import WalletCreatePassword from './CreatePasswordScreen'

const mapStateToProps = (state) => ({
  walletKey: selectKey(state.wallet)
})

const mapDispatchToProps = {
  hashPassword
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletCreatePassword))
)
