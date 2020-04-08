import React from 'react'
import { PropTypes } from 'prop-types'

import BaseButton from './BaseButton'

const GRADIENT = ['#d90646', '#e84135']

const SuccessButton = ({ children, rounded, size, onPress, enabled }) => (
  <BaseButton
    gradient={GRADIENT}
    rounded={rounded}
    size={size}
    onPress={onPress}
    enabled={enabled}
    >
    {children}
  </BaseButton>
)

SuccessButton.propTypes = {
  children: PropTypes.string.isRequired,
  rounded: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  enabled: PropTypes.bool,
  onPress: PropTypes.func
}

SuccessButton.defaultProps = {
  rounded: false,
  size: 'small'
}

export default SuccessButton