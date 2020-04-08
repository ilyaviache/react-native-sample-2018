import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import SettingsManualToken from './ManualTokenScreen'

const mapStateToProps = ({ settings }) => ({
  settings
})

const mapDispatchToProps = {

}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(SettingsManualToken))
)