import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScrollContainer, ViewContainer, PageContainer } from '../../../elements'
import { P } from '../../../elements'

class SettingsFAQ extends PureComponent {
  render() {
    return (
      <ScrollContainer>
        <PageContainer>
          <ViewContainer>
            {t("settings.faq.text").map((el, i) => <P key={i}>{el}</P>)}
          </ViewContainer>
        </PageContainer>
      </ScrollContainer>
    )
  }
}

SettingsFAQ.propTypes = {
  ...screenDefaultPropTypes
}

export default SettingsFAQ
