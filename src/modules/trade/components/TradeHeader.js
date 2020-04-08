import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import { View } from '../../../elements'

class TradeHeader extends PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

TradeHeader.propTypes = {
  children: PropTypes.node
}

const Wrapper = styled(View) `
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  background-color: ${prop('theme.colors.tradeHeaderBackground')};
`

export default TradeHeader
