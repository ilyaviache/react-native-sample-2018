import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { P } from '../../../elements'

class SettingsPrivacy extends PureComponent {
  render() {
    return (
      <ScreenContainer>
        <PageContainer>
          <ViewContainer>
            {t("settings.privacy.text").map((el, i) => <P key={i}>{el}</P>)}
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsPrivacy.propTypes = {
  ...screenDefaultPropTypes
}

export default SettingsPrivacy
