import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import withPreventDebounce from '../../utils/HOC/withPreventDebounce'


class TouchableOpacity extends PureComponent {
  render() {
    const { children, ...rest } = this.props
    return (
      <Element {...rest}>{children}</Element>
    )
  }
}

TouchableOpacity.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node
}

const Element = styled.TouchableOpacity``

export default withPreventDebounce(TouchableOpacity)