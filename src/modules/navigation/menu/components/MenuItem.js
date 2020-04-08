import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ifProp } from 'styled-tools'

import CustomIcon from '../../../../utils/icon'

import { Text, TouchableOpacity } from '../../../../elements'

class MenuItem extends PureComponent {

  constructor(params) {
    super(params)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { route, onPress } = this.props
    if(onPress) { onPress(route) }
  }

  render() {
    return (
      <Touchable noBorder={this.props.noBorder} onPress={this.handleClick}>
        <Label>{this.props.children}</Label>
        <MenuIcon name={this.props.icon} size={this.props.size}></MenuIcon>
      </Touchable>
    )
  }
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.number,
  noBorder: PropTypes.bool
}

MenuItem.defaultProps = {
  size: 16
}

// TODO: last child border
const Touchable = styled(TouchableOpacity) `
  padding-bottom: 14px;
  padding-top: 14px;
  borderBottomWidth: ${ifProp({ noBorder: true }, 0, '1px')}
  borderBottomColor: ${ ({ theme })  => theme.colors.drawerItemBorderColor };
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Label = styled(Text) `
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.colors.drawerContrastColor }
`

const MenuIcon = styled(CustomIcon) `
  color: ${({ theme }) => theme.colors.drawerIconColor};
  margin-left: auto;
`

export default MenuItem
