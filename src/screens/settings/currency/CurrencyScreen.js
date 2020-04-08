import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, PageContainer } from '../../../elements'
import { SectionHeader } from '../../../elements'

import CurrencyForm from '../../../modules/settings/components/CurrencyForm'

class SettingsCurrency extends PureComponent {

  constructor(params) {
    super(params)

    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleLanguageChange(params) {
    const { changeCurrency, navigation } = this.props
    changeCurrency(params.currency)
    navigation.goBack(navigation.state.key)
  }

  render() {
    const { currency } = this.props.settings
    return (
      <ScreenContainer>
        <PageContainer>
          <ViewContainer>
            <SectionHeader>
              {t('settings.currency.header')}
            </SectionHeader>
            <CurrencyForm onSend={this.handleLanguageChange} values={{ currency }} />
          </ViewContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

SettingsCurrency.propTypes = {
  ...screenDefaultPropTypes,
  settings: PropTypes.object,
  changeCurrency: PropTypes.func
}

export default SettingsCurrency
