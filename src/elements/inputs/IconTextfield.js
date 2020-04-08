import React from 'react'
import styled, { withTheme } from 'styled-components'
import { PropTypes } from 'prop-types'

import Textfield from './Textfield'

const textInputStyle = {
  paddingLeft: 34
}

const IconTextfield = ({ children, theme, ...textFieldParams }) => (
  <Wrapper>
    <IconWrapper>
      {children && React.cloneElement(children, { color: theme.colors.inputBorder })}
    </IconWrapper>
    <Textfield
      textInputStyle={textInputStyle}
      {...textFieldParams}
    />
  </Wrapper>
)

IconTextfield.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
}

const Wrapper = styled.View `

`

const IconWrapper = styled.View `
  position: absolute;
  top: 7px;
  left: 9px;
  width: 40px;
`

export default withTheme(IconTextfield)