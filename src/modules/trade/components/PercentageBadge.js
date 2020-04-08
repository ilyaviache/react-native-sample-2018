import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import { View, Text } from '../../../elements'

class PercentageBadge extends PureComponent {
  render() {
    const { upraising, children } = this.props
    return (
      <Wrapper upraising={upraising}>
        <Element upraising={upraising}>{children}</Element>
      </Wrapper>
    )
  }
}

PercentageBadge.propTypes = {
  children: PropTypes.node,
  upraising: PropTypes.bool
}

const Wrapper = styled(View) `
  margin-left: 10px;
  padding: 4px 20px;
  borderRadius: 2px;
  ${ifProp('upraising',
    css`
    background: ${ prop('theme.colors.success')};
  `,
    css`
    background: ${ prop('theme.colors.danger')};
  `)}
`
const Element = styled(Text) `
  font-family: ${prop('theme.typo.condensedFont')};
  font-size: 16px;
  font-weight: 400;
  color: ${ifProp({ upraising: true }, prop('theme.colors.buttonLight'), prop('theme.colors.buttonDark'))}
`

export default PercentageBadge
