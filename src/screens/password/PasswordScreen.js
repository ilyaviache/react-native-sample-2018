import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import styled from 'styled-components'

import screenDefaultPropTypes from '../../utils/screenPropTypes'
import { t } from '../../locales/i18n'

import { ScreenContainer } from '../../elements'
import { View, Text, TouchableOpacity } from '../../elements'

import PasswordForm from '../../modules/password/components/PasswordForm'

class PasswordScreen extends PureComponent {

  constructor(props) {
    super(props)

    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this)
    this.handleLinkPress = this.handleLinkPress.bind(this)
    this.resetPressed = this.resetPressed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps
    if (error) {
      Alert.alert( t(error) )
    }
  }

  handleLinkPress() {
    Alert.alert(
      t('notifications.warning'),
      t('notifications.reset_password'),
      [
        { text: t('inputs.cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: t('inputs.ok'), onPress: this.resetPressed },
      ],
      { cancelable: false }
    )
  }

  resetPressed() {
    this.props.resetPassword()
  }

  handlePasswordSubmit(values) {
    this.props.checkPassword(values.password)
  }

  render() {
    return (
      <ScreenContainer>
        <PasswordFormContainer>
          <PasswordForm onSend={this.handlePasswordSubmit} />
        </PasswordFormContainer>
        <BottomContainer>
          <TouchableOpacity onPress={this.handleLinkPress}>
            <BottomLink>{t('route.WalletResetPassword')}</BottomLink>
          </TouchableOpacity>
        </BottomContainer>
      </ScreenContainer>
    )
  }

}

PasswordScreen.propTypes = {
  ...screenDefaultPropTypes,
  checkPassword: PropTypes.func,
  resetPassword: PropTypes.func,
  error: PropTypes.string
}

const PasswordFormContainer = styled(View)`
  padding: 0px 25px;
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -140px;
`

const BottomContainer = styled(View)`
  padding: 20px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 10;
  justify-content: center;
  align-items: center;
`

const BottomLink = styled(Text)`
  font-size: 16;
`

export default PasswordScreen
