import { withTheme } from 'styled-components'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { getCurrentRoute } from '../../../../redux/navigation'

import DefaultHeader from '../components/DefaultHeader'

const mapStateToProps = (state) => ({
  navigationState: getCurrentRoute(state)
})

export default connect(mapStateToProps)(
  withTheme(
    withNavigation(
      DefaultHeader
    )
  )
)
