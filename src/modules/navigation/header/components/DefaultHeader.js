import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CustomIcon from '../../../../utils/icon'

import { Text } from '../../../../elements'

class DefaultHeader extends PureComponent {

  constructor(params) {
    super(params)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
      <Header className={'DefaultHeader'}>
        <Title>{this.props.title}</Title>
        <Hamburger onPress={this.handleClick}>
          <HamburgerIcon size={18} name={'menu-open'} />
        </Hamburger>
      </Header>
    )
  }
}
DefaultHeader.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object
}

const Header = styled.View `
  height: 80px;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.background };
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

const HamburgerIcon = styled(CustomIcon) `
  color: ${ ({ theme }) => theme.colors.headerContrastColor }
`

const Hamburger = styled.TouchableOpacity`
  margin-left: auto;
`

const Title = styled(Text)`
  font-size: 18px;
  align-self: center;
  margin-left: auto;
`

export default DefaultHeader
