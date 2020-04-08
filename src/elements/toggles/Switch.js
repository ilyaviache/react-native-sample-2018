import React from 'react'
import { MKSwitch } from 'react-native-material-kit'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const Switch = ({ children, checked, ...rest }) => (
  <Wrapper>
    <Input
      checked={checked}
      onColor='#fdc77c'
      thumbOnColor='#faa632'
      rippleColor={`rgba(250,166,50,.15)`}
      {...rest}
    />
    <Label>{children}</Label>
  </Wrapper>
)

const Wrapper = styled.View `
  flex-direction: column;
  align-items: center;
  width: auto;
  align-self: flex-start;
`

const Input = styled(MKSwitch) `
`

const Label = styled.Text `
`

Switch.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool
}

Switch.defaultProps = {
  checked: false
}

export default Switch