import React, { PureComponent } from 'react'

import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import PasswordForm from '../../../modules/settings/components/PasswordForm'

class SettingsPassword extends PureComponent {

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
        <PageContainer>
          <ViewContainer>
            <PasswordForm onSend={this.handleSubmit} />
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsPassword.propTypes = {
  ...screenDefaultPropTypes
}

export default SettingsPassword
