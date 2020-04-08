import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import WalletPages from './PagesScreen'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletPages))
)
