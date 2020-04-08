import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { getKey } from '../../../redux/wallet'

import WalletConfirmSeedWord from './ConfirmSeedWordScreen'

const mapStateToProps = (state) => ({
  seed: state.wallet.seed
})

const mapDispatchToProps = {
  getKey
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletConfirmSeedWord))
)
