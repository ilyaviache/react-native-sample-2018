import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { AlertLabel } from '../../../elements'

import ManualTokenForm from '../../../modules/settings/components/ManualTokenForm'

class SettingsManualToken extends PureComponent {

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
            <AlertLabel>
              {t('settings.manual_token.header')}
            </AlertLabel>
            <ManualTokenForm onSend={this.handleSubmit} />
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsManualToken.propTypes = {
  ...screenDefaultPropTypes
}

export default SettingsManualToken
