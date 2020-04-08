import React, { PureComponent } from 'react'
import { Animated, PanResponder } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import { t } from '../../../locales/i18n'
import CustomIcon from '../../../utils/icon'

import { View, Text, RobotoText } from '../../../elements'
import PercentageBadge from './PercentageBadge'
import DeleteButton from './DeleteButton'

class CurrencyItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      animated: new Animated.Value(0),
      opacityAnimated: new Animated.Value(1),
      deleteTransformValue: 0
    }
    this.panResponderInit = this.panResponderInit.bind(this)
    this.interpolateInit = this.interpolateInit.bind(this)
    this.handleFavPress = this.handleFavPress.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.handleDeletePress = this.handleDeletePress.bind(this)
    this.checkAndSetTransformValue = this.checkAndSetTransformValue.bind(this)
  }

  interpolateInit() {
    // const panResponderInputRange = [0, CardWidth, 300]
    this._activeOpacityInterpolate = this.state.animated.interpolate({
      inputRange: [-50, 0],
      outputRange: [1, 0]
    }, {
      useNativeDriver: true
    })
  }

  panResponderInit() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: (event, { dx, dy }) => {
        if (dy <= 2 && dx < 0 && this.props.scroll) {
          this.props.onGrant && this.props.onGrant()
        }
        if (this.props.favorite) {
          this.state.animated.setValue(dx)
        }
      },
      onPanResponderGrant: () => {
        this.startOpacityAnimation(0.4)
      },
      onPanResponderRelease: (e, { dx }) => {
        console.log('onRelease')
        this.startOpacityAnimation(1)
        this.startPanelAnimation()

        if (dx === 0) {
          this.handlePress()
          return
        }

        this.checkAndSetTransformValue(dx)
        this.props.onRelease && this.props.onRelease()
      }
    })
  }

  clearOffset() {
    this.state.animated.setOffset(0)
    this.setState({
      deleteTransformValue: 0
    })
    this.startPanelAnimation()
  }

  checkAndSetTransformValue(dx) {
    if (!this.props.favorite) {
      return
    }
    let deleteValue = this.state.deleteTransformValue
    if (dx < -50 && deleteValue === 0) {
      deleteValue = -50
      this.state.animated.setOffset(deleteValue)
    } else {
      deleteValue = 0
      this.state.animated.setOffset(deleteValue)
    }
    this.setState({
      deleteTransformValue: deleteValue
    })
  }

  startPanelAnimation() {
    Animated.spring(this.state.animated, {
      toValue: 0,
      friction: 10,
      tension: 160,
      useNativeDriver: true
    }).start()
  }

  startOpacityAnimation(value) {
    Animated.timing(this.state.opacityAnimated, {
      toValue: value,
      duration: 150,
      useNativeDriver: true
    }).start()
  }

  handleFavPress() {
    if (this.props.favorite) {
      this.handleDeletePress()
    } else {
      this.props.onFavPress(this.props.shortcut)
    }
  }

  handleDeletePress() {
    this.clearOffset()
    this.props.onDeletePress(this.props.shortcut)
  }

  componentWillMount() {
    this.interpolateInit()
    this.panResponderInit()
  }

  handlePress() {
    this.props.onCurrencyPress(this.props.index)
  }

  render() {
    const AnimatedStyles = {
      transform: [
        {
          translateX: this.state.animated
        }
      ]
    }
    const DeleteAnimatedStyles = {
      opacity: this._activeOpacityInterpolate
    }

    const opacityStyles = {
      opacity: this.state.opacityAnimated
    }

    return (
      <Container>
        <CardContainer
          style={AnimatedStyles}
        >
          <IconCell onPress={this.handleFavPress}>
            {this.props.favorite
              ? <FullStar name={'full-star'} />
              : <FavIcon name={'outline-star'} />
            }
          </IconCell>
          <InnerCardContainer
            style={opacityStyles}
            {...this._panResponder.panHandlers}
          >
            <Cell>
              <Shortcut>{this.props.shortcut}</Shortcut>
              <Title>{this.props.title}<Subtitle> / {this.props.denominator}</Subtitle></Title>
              <Vol>{t('trade.vol')} {this.props.volume}</Vol>
            </Cell>
            <Cell rightSided={Boolean(true)}>
              <Price upraising={this.props.upraising}>
                {this.props.price}
              </Price>
              <EqualPrice>
                = {this.props.currency + this.props.equalPrice}
              </EqualPrice>
            </Cell>
            <Cell>
              <PercentageBadge upraising={this.props.upraising}>
                {this.props.upraising ? '+' : '-'}{this.props.trendValue + '%'}
              </PercentageBadge>
            </Cell>
          </InnerCardContainer>
        </CardContainer>
        <DeleteCell style={[DeleteAnimatedStyles, AnimatedStyles]}>
          <DeleteButton
            onDeletePress={this.handleDeletePress}
          />
        </DeleteCell>
      </Container>
    )
  }
}

CurrencyItem.propTypes = {
  shortcut: PropTypes.string,
  title: PropTypes.string,
  volume: PropTypes.number,
  denominator: PropTypes.string,
  price: PropTypes.number,
  equalPrice: PropTypes.number,
  currency: PropTypes.string,
  upraising: PropTypes.bool,
  trendValue: PropTypes.number,
  onCurrencyPress: PropTypes.func,
  index: PropTypes.number.isRequired,
  favorite: PropTypes.bool,
  onFavPress: PropTypes.func,
  onDeletePress: PropTypes.func,
  onGrant: PropTypes.func,
  onRelease: PropTypes.func,
  scroll: PropTypes.bool
}

CurrencyItem.propTypes = {
  denominator: 'ETH'
}

const Container = styled(View)`
  height: 60px;
`

const CardContainer = styled(Animated.View)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`
const InnerCardContainer = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  borderBottomWidth: 1px;
  borderBottomColor: ${prop('theme.colors.listBorder')};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 0;
  position: relative;
`

const Shortcut = styled(RobotoText)`
font-size: 13px;
color: ${({ theme }) => theme.colors.fontBlinked};
`

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`

const Subtitle = styled(Text)`
  font-weight: normal;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.fontBlinked};
`

const Cell = styled(View)`
  display: flex;
  margin-left: ${ifProp({ rightSided: true }, 'auto', '0')};
`

const IconCell = styled.TouchableOpacity`
  padding-left: 20px;
`

const Vol = styled(RobotoText)`
  color: ${({ theme }) => theme.colors.fontBlinked}
  font-size: 11px;
  line-height: 12px;
`

const Price = styled(RobotoText)`
  font-size: 11px;
  color: ${ ifProp({ upraising: true },
    ({ theme }) => theme.colors.success,
    ({ theme }) => theme.colors.danger)
  }
`

const EqualPrice = styled(RobotoText)`
  font-size: 11px;
  color: ${prop('theme.colors.fontBlinked')}
`

const FavIcon = styled(CustomIcon)`
  margin-right: 5px;
`

const FullStar = styled(FavIcon)`
  color: ${prop('theme.colors.primary')}
`
const DeleteCell = styled(Animated.View)`
  background: black;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 100%;
  margin-left: -10px;
`
// position: absolute;
// right: -785px;
// height: 100%;
// width: 800px;
// padding-right: 150px;

export default CurrencyItem
