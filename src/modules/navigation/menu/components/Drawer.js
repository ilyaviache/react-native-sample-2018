
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CustomIcon from '../../../../utils/icon'
import { t } from '../../../../locales/i18n'

import { View, Image } from '../../../../elements'
import MenuItem from './MenuItem'

class DrawerContainer extends PureComponent {

  constructor(props) {
    super(props)

    this.navigate = this.navigate.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleGoHome = this.handleGoHome.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  navigate(screen) {
    this.props.navigation.navigate(screen)
    this.props.navigation.navigate('DrawerClose')
  }

  handleGoHome(event) {
    console.log(event.target, 'dataset')
  }

  handleClose() {
    this.navigate('DrawerClose')
  }

  handleMenuClick(route) {
    this.navigate(route)
  }

  render() {
    return (
      <Overlay>
        <Header>
          <Logo source={require('../../../../../assets/icons/logo.png')}></Logo>
          <Habmburger onPress={this.handleClose}>
            <HamburgerIcon name="back" size={16} />
          </Habmburger>
        </Header>
        <View>
          <MenuItem
            icon={'trade'}
            route={'Trade'}
            onPress={this.handleMenuClick}
            size={14}
          >{t('menu.trade')}</MenuItem>
          <MenuItem
            text={t('menu.wallet')}
            icon={'wallet'}
            route={'Wallet'}
            onPress={this.handleMenuClick}
          >{t('menu.wallet')}</MenuItem>
          <MenuItem
            text={t('menu.settings')}
            icon={'settings'}
            route={'Settings'}
            onPress={this.handleMenuClick}
            size={18}
          >{t('menu.settings')}</MenuItem>
          <MenuItem
            text={t('menu.notifications')}
            icon={'info'}
            route={'Notifications'}
            onPress={this.handleMenuClick}
            size={18}
          >{t('menu.notifications')}</MenuItem>
          <MenuItem
            noBorder
            text={t('menu.contact')}
            icon={'contact'}
            route={'Contact'}
            onPress={this.handleMenuClick}
          >{t('menu.contact')}</MenuItem>
        </View>
      </Overlay>
    )
  }
}

const Overlay = styled(View)`
  background-color: ${ ({ theme }) => theme.colors.backgroundMenu};
  flex: 1;
  padding: 20px;
`

const Logo = styled(Image)`
  width: 36px;
  height: 58px;
  margin-left: 5px;
`

const Header = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const Habmburger = styled.TouchableOpacity`
  display: flex;
  margin-left: auto;
`

const HamburgerIcon = styled(CustomIcon) `
  color: ${ ({ theme }) => theme.colors.drawerContrastColor}
`

DrawerContainer.propTypes = {
  navigation: PropTypes.object
}

export default DrawerContainer
