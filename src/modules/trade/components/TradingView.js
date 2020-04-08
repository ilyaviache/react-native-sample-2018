import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WebView } from 'react-native'

class TradingView extends PureComponent {
  render() {
    const { url } = this.props
    return (
      <Web source={{ uri: url }} />
    )
  }
}

TradingView.propTypes = {
  url: PropTypes.string
}

const Web = styled(WebView)`
  flex: 1;
  width: 100%;
`

export default TradingView
