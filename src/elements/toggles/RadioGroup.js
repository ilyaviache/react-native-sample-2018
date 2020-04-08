import React, { PureComponent } from 'react'
import { MKRadioButton } from 'react-native-material-kit'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const group = new MKRadioButton.Group()

class RadioGroup extends PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.children(group)}
      </Wrapper>
    )
  }
}

const Wrapper = styled.View `
`

RadioGroup.propTypes = {
  children: PropTypes.func
}

export default RadioGroup