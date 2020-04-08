import React from 'react'
import { PropTypes } from 'prop-types'

import BaseButton from './BaseButton'

const GRADIENT = ['#daa643', '#d65b1d']

const SubmitButton = ({ children, rounded, size, onPress, enabled, className }) => (
  <BaseButton
    gradient={GRADIENT}
    rounded={rounded}
    size={size}
    onPress={onPress}
    className={className}
    enabled={enabled}
    >
    {children}
  </BaseButton>
)

SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  enabled: PropTypes.bool,
  onPress: PropTypes.func
}

SubmitButton.defaultProps = {
  rounded: false,
  size: 'small'
}

export default SubmitButton