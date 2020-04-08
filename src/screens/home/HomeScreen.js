import React, { Component } from 'react'
import { Alert } from 'react-native'
import styled from 'styled-components'

import screenDefaultPropTypes from '../../utils/screenPropTypes'
import { t } from '../../locales/i18n'

import { ScreenContainer } from '../../elements'
import { View, Text, TouchableOpacity } from '../../elements'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)

    this.handleLinkPress = this.handleLinkPress.bind(this)
  }

  handleLinkPress() {
    Alert.alert(
      t('notifications.warning'),
      t('notifications.reset_password'), 
      [
        { text: t('inputs.cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: t('inputs.ok'), onPress: () => this.props.navigation.navigate('WalletResetPassword') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <ScreenContainer>
        <BottomContainer>
          <TouchableOpacity onPress={this.handleLinkPress}>
            <BottomLink>{t('route.WalletResetPassword')}</BottomLink>
          </TouchableOpacity>
        </BottomContainer>
      </ScreenContainer>
    )
  }
}

HomeScreen.propTypes = {
  ...screenDefaultPropTypes
}

const BottomContainer = styled(View) `
  padding: 20px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 10;
  justify-content: center;
  align-items: center;
`

const BottomLink = styled(Text) `
  font-size: 16;
`