import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { View } from '../../../elements'

import { ScreenContainer, ScrollContainer, PageContainer } from '../../../elements'
import { ListMenu, ListMenuItem } from '../../../elements'
import { Checkbox } from '../../../elements'

class SettingsHome extends PureComponent {

  constructor(params) {
    super(params)

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleNightmodeChange = this.handleNightmodeChange.bind(this)
  }

  handleMenuClick(name) {
    this.props.navigation.navigate(name)
  }

  handleNightmodeChange({ checked }) {
    if(checked){
      this.props.changeTheme('dark')
    } else {
      this.props.changeTheme('light')
    }
  }

  render() {
    return (
      <ScreenContainer>
        <PageContainer>
          <ScrollContainer>
            <ListMenu>
              <ListMenuItem name='SettingsAddToken' text={t('route.SettingsAddToken')} onPress={this.handleMenuClick} />
              <ListMenuItem name='SettingsCurrency' text={t('route.SettingsCurrency')} onPress={this.handleMenuClick} separator />
              <ListMenuItem name='SettingsPassword' text={t('route.SettingsPassword')} onPress={this.handleMenuClick} />
              <ListMenuItem name='SettingsNightmode' text={t('route.SettingsNightmode')}>
                <CheckboxWrapper>
                  <Checkbox onCheckedChange={this.handleNightmodeChange} checked={this.props.settings.theme === 'dark'} />
                </CheckboxWrapper>
              </ListMenuItem>
              <ListMenuItem name='SettingsLanguage' text={t('route.SettingsLanguage')} onPress={this.handleMenuClick} separator />
              <ListMenuItem name='SettingsFAQ' text={t('route.SettingsFAQ')} onPress={this.handleMenuClick} />
              <ListMenuItem name='SettingsTerms' text={t('route.SettingsTerms')} onPress={this.handleMenuClick} />
              <ListMenuItem name='SettingsPrivacy' text={t('route.SettingsPrivacy')} onPress={this.handleMenuClick} />
            </ListMenu>
          </ScrollContainer>
        </PageContainer>
      </ScreenContainer>
    )
  }
}

const CheckboxWrapper = styled(View) `
  margin-right: -13px;
`

SettingsHome.propTypes = {
  ...screenDefaultPropTypes,
  settings: PropTypes.object,
  changeTheme: PropTypes.func
}

export default SettingsHome
