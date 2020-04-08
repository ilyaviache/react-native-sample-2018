import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { t } from '../../../locales/i18n'

import CustomIcon from '../../../utils/icon'
import { Roboto } from '../../../elements'

const GRADIENT = ['#d90646', '#e84135']

class DeleteButton extends PureComponent {

  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    this.props.onDeletePress()
  }

  render() {
    return (
      <Container colors={GRADIENT}>
        <Button onPress={this.handlePress}>
          <Icon name="trash" size={19} />
          <Text>{t('trade.delete')}</Text>
        </Button>
      </Container>
    )
  }
}

DeleteButton.propTypes = {
  onDeletePress: PropTypes.func
}

const Container = styled(LinearGradient) `
  width: 100%;
  height: 100%;
  display: flex;
`

const Button = styled(TouchableOpacity) ` 
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled(CustomIcon) `
  color: ${prop('theme.colors.white')}
`

const Text = styled(Roboto) `
  color: ${prop('theme.colors.white')}
  font-size: 13px;
`

export default DeleteButton
