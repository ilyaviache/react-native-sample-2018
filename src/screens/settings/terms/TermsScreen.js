import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { P } from '../../../elements'

class SettingsTerms extends PureComponent {
  render() {
    return (
      <ScreenContainer>
        <PageContainer>
          <ViewContainer>
            <Header>{t("settings.terms.header")}</Header>
            {t("settings.terms.text").map((el, i) => <P key={i}>{el}</P>)}
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsTerms.propTypes = {
  ...screenDefaultPropTypes
}

const Header = styled(P) `
  text-align: center;
  margin-bottom: 20px;
`

export default SettingsTerms
