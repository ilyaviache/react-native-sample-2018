import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer } from '../../../elements'
import PasswordForm from '../../../modules/wallet/components/PasswordForm'

class WalletCreatePassword extends PureComponent {

  constructor(params) {
    super(params)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(formValue) {
    const { navigation, walletKey } = this.props
    const { password } = formValue
    console.log(password, walletKey)
    this.props.hashPassword({
      password,
      walletKey
    })
    navigation.navigate('Home')
  }

  render() {
    return (
      <ScreenContainer>
        <ViewContainer>
          <PasswordForm onSend={this.handleSubmit} />
        </ViewContainer>
      </ScreenContainer>
    )
  }
}

WalletCreatePassword.propTypes = {
  ...screenDefaultPropTypes,
  hashPassword: PropTypes.func,
  walletKey: PropTypes.string
}

export default WalletCreatePassword
