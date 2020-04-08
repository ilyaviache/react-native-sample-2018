import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { changeTheme } from '../../../redux/settings'

import WalletImport from './ImportScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {
  changeTheme
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletImport))
)
