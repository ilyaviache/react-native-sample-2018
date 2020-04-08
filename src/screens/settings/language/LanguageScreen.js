import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { SectionHeader } from '../../../elements'

import LanguageForm from '../../../modules/settings/components/LanguageForm'

class SettingsLanguage extends PureComponent {

  constructor(params) {
    super(params)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(params) {
    const { changeLocale, navigation } = this.props
    changeLocale(params.locale)
    navigation.goBack(navigation.state.key)
  }

  render() {
    const { locale } = this.props.settings
    return (
      <ScreenContainer>
        <PageContainer>
          <ViewContainer>
            <SectionHeader>
              {t('settings.language.header')}
            </SectionHeader>
            <LanguageForm onSend={this.handleSubmit} values={{ locale }} />
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsLanguage.propTypes = {
  ...screenDefaultPropTypes,
  settings: PropTypes.object,
  changeLocale: PropTypes.func
}

export default SettingsLanguage
