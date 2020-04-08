import React, { PureComponent } from 'react'
import { MKButton } from 'react-native-material-kit'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { PropTypes } from 'prop-types'
import { ifProp } from 'styled-tools'

class BaseButton extends PureComponent {
  constructor(props){
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(event) {
    const { onPress, enabled } = this.props
    if(onPress && enabled) { onPress(event) }
  }

  render() {
    const { children, gradient, rounded, size, enabled, className, ...rest } = this.props
    return(
      <ButtonGradient {...rest} colors={gradient} rounded={rounded} enabled={enabled}>
        <Button
          shadowRadius={0}
          className={className}
          shadowOffset={{ width: 0, height: 0 }}
          shadowOpacity={.0}
          shadowColor="black"
          enabled={enabled}
          onPress={this.handlePress}
        >
          <Text pointerEvents="none" size={size}>
            {children}
          </Text>
        </Button>
      </ButtonGradient>
    )
  }
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gradient: PropTypes.array,
  rounded: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  enabled: PropTypes.bool,
  onPress: PropTypes.func
}

BaseButton.defaultProps = {
  enabled: true,
  gradient: ['#daa643', '#d65b1d']
}

const Text = styled.Text`
  font-family: Open Sans;
  font-weight: 600;
  font-size: ${ifProp({ size: 'large' }, '18px', '16px')}};
  color: white;
`

const Button = styled(MKButton) `
  flex: 1;
  opacity: ${ifProp('enabled', 1, 0.65)}};
  justify-content: center;
  align-items: center;
`

const ButtonGradient = styled(LinearGradient) `
  flex: 1;
  opacity: ${ifProp('enabled', 1, 0.65)}};
  border-radius: ${ifProp({ rounded: true }, '4px', '0px')}};
`

export default BaseButton