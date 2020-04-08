import { connect } from 'react-redux'
import { checkPassword, resetPassword, selectError } from '../../redux/wallet'

import PasswordContainer from './PasswordScreen'

const mapStateToProps = (state) => ({
  error: selectError(state.wallet)
})

const mapDispatchToProps = {
  checkPassword,
  resetPassword
}


export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer)