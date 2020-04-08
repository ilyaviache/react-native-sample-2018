import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import HomeScreen from './HomeScreen'

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(HomeScreen))
