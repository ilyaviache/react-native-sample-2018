import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { ifProp, prop } from 'styled-tools'

import View from '../built-in/View'
import ScrollView from '../built-in/ScrollView'

class ScrollContainer extends PureComponent {

  constructor(props) {
    super(props)

    this.setHeight = this.setHeight.bind(this)
  }

  setHeight() {
    const { fullheight } = this.props
    return fullheight ? { flexGrow: 1 } : {}
  }

  render() {
    const { children, disabled, ...rest } = this.props
    return (
      <Element contentContainerStyle={this.setHeight()} {...rest}>
        {children}
        {disabled && <Overlay show={disabled} />}
      </Element>
    )
  }
}

ScrollContainer.propTypes = {
  children: PropTypes.node,
  fullheight: PropTypes.bool,
  disabled: PropTypes.bool
}

ScrollContainer.defaultProps = {
  disabled: false,
  fullheight: false
}

const Element = styled(ScrollView) `
  position: relative;
`

const Overlay = styled(View) `
  height: ${prop('height', 'auto')};
  display: ${ifProp('show', 'flex', 'none')};
  position: absolute;
  flex: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
  opacity: 0.6;
`

export default ScrollContainer