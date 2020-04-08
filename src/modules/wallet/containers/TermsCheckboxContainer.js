import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import TermsCheckbox from '../components/TermsCheckbox'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
}

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(TermsCheckbox)
)
