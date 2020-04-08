import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Triangle from 'react-native-triangle' // eslint-disable-line
import styled, { withTheme } from 'styled-components'

import { View } from '../../../elements'

class TriangleComponent extends PureComponent {
  render() {
    const { direction, width, height, color, children, ...rest } = this.props
    return (
      <Wrapper>
        <Element {...rest}
          width={width}
          height={height}
          color={color}
          direction={direction}
        />
        { children && children }
      </Wrapper>
    )
  }
}

const Wrapper = styled(View) `
  position: relative;
`

const Element = styled(Triangle) `

`

TriangleComponent.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  color: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

TriangleComponent.defaultProps = {
  direction: 'down-left',
  width: 22,
  height: 22
}

export default withTheme(TriangleComponent)
