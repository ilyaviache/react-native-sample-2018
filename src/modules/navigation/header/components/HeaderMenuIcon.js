import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CustomIcon from '../../../../utils/icon'

class HamburgerComponent extends PureComponent {

  constructor(params) {
    super(params)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
      <Hamburger onPress={this.handleClick}>
        <HamburgerIcon size={14} name={'menu-open'} />
      </Hamburger>
    )
  }
}

const HamburgerIcon = styled(CustomIcon) `
  color: ${ ({ theme }) => theme.colors.headerContrastColor }
`

const Hamburger = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 10px;
`

HamburgerComponent.propTypes = {
  navigation: PropTypes.object
}

export default HamburgerComponent
