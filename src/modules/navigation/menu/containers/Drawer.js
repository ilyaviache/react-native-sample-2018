import { connect } from 'react-redux'
import { mapNavigatioToState } from '../../../../services/mapNavigationToState'

import Drawer from '../components/Drawer'

const mapStateToProps = ({ navigation }) =>
  mapNavigatioToState(navigation)

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
