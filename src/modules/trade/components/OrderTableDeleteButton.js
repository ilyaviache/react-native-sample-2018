import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import PropTypes from 'prop-types'

import { View } from '../../../elements'
import CustomIcon from '../../../utils/icon'

class OrderTableDeleteButton extends PureComponent {

  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    this.props.onPress(this.props.index)
  }

  render() {
    return (
      <ButtonBackground>
        <Button onPress={this.handlePress}>
          <Icon name='cancel' size={11} />
        </Button>
      </ButtonBackground>
    )
  }
}

OrderTableDeleteButton.propTypes = {
  onPress: PropTypes.func,
  index: PropTypes.number
}

const ButtonBackground = styled(View) `
  height: 32px;
  width: 32px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-self: center;
`

const Button = styled.TouchableOpacity`
  background: ${prop('theme.colors.danger')}
  padding: 5px;
  borderRadius: 20px;
`

const Icon = styled(CustomIcon) `
  color: ${prop('theme.colors.background')}
`


export default OrderTableDeleteButton
