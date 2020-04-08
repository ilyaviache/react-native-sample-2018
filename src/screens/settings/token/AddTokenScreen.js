import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { SectionHeader } from '../../../elements'

import AddTokenForm from '../../../modules/settings/components/AddTokenForm'

class SettingsAddToken extends PureComponent {

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
            <SectionHeader>
              {t('settings.add_token.header')}
            </SectionHeader>
            <AddTokenForm onSend={this.handleSubmit} />
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsAddToken.propTypes = {
  ...screenDefaultPropTypes
}

export default SettingsAddToken
