import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import AccountHeader from '../components/AccountHeader'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(AccountHeader))
)
