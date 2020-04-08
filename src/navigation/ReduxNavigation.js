import React, { PureComponent } from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import I18n from 'react-native-i18n'

import { addListener } from '../utils/redux'
import getStyleVars from '../utils/styles/variables'

import AppNavigation, { PasswordNavigator } from './AppNavigator'

import { selectPasswordSet } from '../redux/wallet'

import errorService from '../services/ErrorService'

// here is our redux-aware our smart component

class ReduxNavigation extends PureComponent {

  constructor(props) {
    super(props)
    this.checkPassword = this.checkPassword.bind(this)
  }

  componentDidMount() {
    errorService.init()
  }

  checkPassword() {
    return (this.props.passwordSet &&
      this.props.password &&
      this.props.loggedIn) || !this.props.passwordSet
  }

  render() {
    const { dispatch, navigation, settings } = this.props
    const theme = getStyleVars(settings.theme)
    I18n.locale = settings.locale
    const _navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: navigation,
      addListener
    })
    return (
      <ThemeProvider theme={theme}>
        {
          this.checkPassword()
            ? <AppNavigation navigation={_navigation} screenProps={{ theme }} />
            : <PasswordNavigator navigation={_navigation} screenProps={{ theme }} />
        }
      </ThemeProvider>
    )
  }

}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
  settings: PropTypes.object,
  password: PropTypes.string,
  loggedIn: PropTypes.bool,
  passwordSet: PropTypes.bool
}

const mapStateToProps = state => ({
  navigation: state.navigation,
  settings: state.settings,
  password: state.wallet.password,
  loggedIn: state.wallet.loggedIn,
  passwordSet: selectPasswordSet(state.wallet)
})

export default connect(mapStateToProps)(ReduxNavigation)
