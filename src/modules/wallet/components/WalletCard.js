import React, { PureComponent } from 'react'
import styled, { withTheme, css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import PropTypes from 'prop-types'

import Icon from '../../../utils/icon'
import { t } from '../../../locales/i18n'

import { View, Text, Image, TouchableOpacity } from '../../../elements'

import Triangle from './Triangle'

class WalletCard extends PureComponent {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
    this.handleFavPress = this.handleFavPress.bind(this)
  }

  handlePress(event) {
    const { onCardPress, id } = this.props
    event.stopPropagation()
    if (onCardPress) { onCardPress(id) }
  }

  handleFavPress(event) {
    const { onFavPress, id } = this.props
    event.stopPropagation()
    if (onFavPress) { onFavPress(id) }
  }

  render() {
    const { theme, name, address, primary } = this.props
    return (
      <Wrapper active={primary} onPress={this.handlePress}>
        <Row>
          <Cell>
            {theme.name === 'light' && <Logo source={require('../../../../assets/icons/logo-small-black.png')} />}
            {theme.name === 'dark' && <Logo source={require('../../../../assets/icons/logo-small-white.png')} />}
          </Cell>
          <Cell>
            <Header>{name}</Header>
            <Label>{address}</Label>
            <IconsRow>
              <IconCell>
                <Icon name='coin-eth' size={16} />
              </IconCell>
              <IconCell>
                <Icon name='coin-dai' size={16} />
              </IconCell>
              <IconCell>
                <Icon name='coin-zrx' size={16} />
              </IconCell>
            </IconsRow>
          </Cell>
          <ArrowIcon name='right-arrow' color={theme.colors.success} size={14}></ArrowIcon>
        </Row>
        {
          primary ?
            <NonTouchableRow last>
              <Primary active={primary}> {primary ? t('wallet.primary') : t('wallet.make_primary')} </Primary>
              <Amount> ¥ 48,000.00 </Amount>
            </NonTouchableRow> :
            <TouchableRow last onPress={this.handleFavPress}>
              <Primary active={primary}> {primary ? t('wallet.primary') : t('wallet.make_primary')} </Primary>
              <Amount> ¥ 48,000.00 </Amount>
            </TouchableRow>
        }
        <TriangleWrapper onPress={this.handleFavPress}>
          <Triangle color={primary ? theme.colors.primary : theme.colors.walletBorder}>
            {primary && <StarIcon name='full-star' size={8} />}
            {!primary && <StarIcon name='outline-star' size={8} />}
          </Triangle>
        </TriangleWrapper>
      </Wrapper>
    )
  }
}

WalletCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onCardPress: PropTypes.func,
  onFavPress: PropTypes.func,
  theme: PropTypes.object,
  primary: PropTypes.bool
}

WalletCard.defaultProps = {
  primary: false
}

const Wrapper = styled(TouchableOpacity)`
  position: relative;
  margin: 28px 26px 8px 26px;
  padding: 4px;
  borderWidth: 1px;
  background: ${ifProp('active',
    prop('theme.colors.activeWalletCardBackground'),
    prop('theme.colors.walletCardBackground'))};
  border: ${ifProp('active',
    prop('theme.colors.primary'),
    prop('theme.colors.walletBorder'))};
`

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 4px 6px;
  min-height: 42px;
  justify-content: ${ifProp('last', 'space-between', 'flex-start')};
  borderTopWidth: ${ifProp('last', '1px', '0px')};
  borderTopColor: ${prop('theme.colors.walletSeparator')};
`

const TouchableRowCss = `
  flex-direction: row;
  align-items: center;
  padding: 4px 6px;
  min-height: 42px;
`

const TouchableRow = styled(TouchableOpacity)`
  ${css`${TouchableRowCss}`}
  justify-content: ${ifProp('last', 'space-between', 'flex-start')};
  borderTopWidth: ${ifProp('last', '1px', '0px')};
  borderTopColor: ${prop('theme.colors.walletSeparator')};
`

const NonTouchableRow = styled(View)`
  ${css`${TouchableRowCss}`}
  justify-content: ${ifProp('last', 'space-between', 'flex-start')};
  borderTopWidth: ${ifProp('last', '1px', '0px')};
  borderTopColor: ${prop('theme.colors.walletSeparator')};
`


const Cell = styled(View)`
`

const Header = styled(Text)`
  font-family: ${prop('theme.typo.condensedFont')}
  font-size: 17px;
  letter-spacing: 0.4px;
  color: ${prop('theme.colors.primary')}
`

const Label = styled(Text)`
  color: ${prop('theme.colors.cardWallerColor')};
  font-size: 12px;
  margin: 2px 0px 4px;
  color: ${prop('theme.colors.cardWalletColor')}
`

const IconsRow = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
`

const IconCell = styled(View)`
  margin-right: 9px;
`

const Logo = styled(Image)`
  width: 25px;
  height: 45px;
  margin-left: 4px;
  margin-right: 14px;
`

const Amount = styled(Text)`
  color: ${prop('theme.colors.cardWalletColor')};
  font-size: 14px;
  margin-bottom: -6px;
`

const Primary = styled(Text)`
  font-family: ${prop('theme.typo.condensedFont')}
  font-size: 13px;
  letter-spacing: 0.4px;
  color: ${prop('theme.colors.primary')}
  color: ${ifProp('active',
    prop('theme.colors.primary'),
    prop('theme.colors.cardWalletColor'))};
`

const TriangleWrapper = styled(TouchableOpacity)`
  position: absolute;
  left: -2px;
  bottom: -2px;
`

const StarIcon = styled(Icon)`
  position: absolute;
  top: 11;
  left: 2;
`

const ArrowIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  right: 8px;
`

export default withTheme(WalletCard)
