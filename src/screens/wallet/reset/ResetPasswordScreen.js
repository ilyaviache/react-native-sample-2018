import React, { PureComponent } from 'react'

import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer } from '../../../elements'
import PasswordForm from '../../../modules/wallet/components/PasswordForm'

class WalletCreatePassword extends PureComponent {

  constructor(params) {
    super(params)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { navigation } = this.props
    navigation.goBack(navigation.state.key)
  }

  render() {
    return (
      <ScreenContainer>
        <ViewContainer>
          <PasswordForm reset onSend={this.handleSubmit} />
        </ViewContainer>
      </ScreenContainer>
    )
  }
}

WalletCreatePassword.propTypes = {
  ...screenDefaultPropTypes
}

export default WalletCreatePassword
