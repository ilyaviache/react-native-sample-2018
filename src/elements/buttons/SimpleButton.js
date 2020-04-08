import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { ifProp, prop } from 'styled-tools'

import { TouchableHighlight } from '../index'

class SimpleButton extends PureComponent {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(event) {
    const { onPress, enabled } = this.props
    if (onPress && enabled) { onPress(event) }
  }

  render() {
    const { children, active, enabled, ...rest } = this.props
    return(
      <Element
        {...rest}
        onPress={this.handlePress}
        enabled={enabled}
        active={active}
        >
        <Label active={active}>{children}</Label>
      </Element>
    )
  }
}

SimpleButton.propTypes = {
  children: PropTypes.node,
  enabled: PropTypes.bool,
  active: PropTypes.bool,
  onPress: PropTypes.func
}

SimpleButton.defaultProps = {
  enabled: true,
  acitve: true
}

const Element = styled(TouchableHighlight) `
  flex-wrap: wrap;
  align-self: center;
  width: 64px;
  height: 21px;
  margin-left: 3px;
  justify-content: center;
  align-items: center;
  opacity: ${ ifProp('enabled', 1, 0.65) }};
  background: ${ ifProp('active',
    prop('theme.colors.simpleButtonBackgroundActive'),
    prop('theme.colors.simpleButtonBackground')) };
  borderColor: #fff;
  borderWidth: 1px;
  borderRadius: 2px;
`

const Label = styled.Text `
  font-family: ${ prop('theme.typo.primaryFont') };
  font-size: 12px;
  color: ${ifProp('active', '#000', '#fff')};
`

export default SimpleButton