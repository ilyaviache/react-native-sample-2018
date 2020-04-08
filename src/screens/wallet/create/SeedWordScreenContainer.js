import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { getSeed, selectSeed } from '../../../redux/wallet'

import WalletSeedWord from './SeedWordScreen'

const mapStateToProps = (state) => ({
  seed: selectSeed(state.wallet)
})

const mapDispatchToProps = {
  getSeed
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletSeedWord))
)
