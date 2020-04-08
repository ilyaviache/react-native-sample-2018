import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'

import { t } from '../../../locales/i18n'
import screenPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer } from '../../../elements'
import { MaterialTabButtons } from '../../../elements'
import { SearchInput } from '../../../elements'
import CurrencyItem from '../../../modules/trade/components/CurrencyItem'

class TradeHome extends PureComponent {

  constructor(props) {
    super(props)
    this.state = Immutable({
      tabs: [
        {
          label: t('trade.tabs.fav'),
          value: 'fav'
        },
        {
          label: t('trade.tabs.eth'),
          value: 'eth'
        },
        {
          label: t('trade.tabs.dai'),
          value: 'dai'
        }
      ],
      scroll: true
    })
    this.isLastCurrency = this.isLastCurrency.bind(this)
    this.handleCurrencyPress = this.handleCurrencyPress.bind(this)
    this.onTabPress = this.onTabPress.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleFavPress = this.handleFavPress.bind(this)
    this.handleDeletePress = this.handleDeletePress.bind(this)
    this.getDenominator = this.getDenominator.bind(this)
    this.handleGrant = () => {
      this.setState({ scroll: false })
    }
    this.handleRelease = () => {
      this.setState({ scroll: true })
    }
  }

  isLastCurrency(index) {
    return this.props.currencies.length === index + 1
  }

  handleCurrencyPress(index) {
    const currency = this.props.currencies[index]
    this.props.setActiveOrder(currency.shortcut)
    this.props.navigation.navigate('TradeOrder')
  }

  handleFavPress(shortcut) {
    this.props.addFavorite(shortcut)
  }

  handleDeletePress(shortcut) {
    this.props.removeFavorite(shortcut)
  }

  onTabPress(value) {
    this.props.setActiveTab(value)
  }

  handleSearchChange(name, value) {
    this.props.setSearchText(value)
  }
  // TODO: I'm not sure how this entity works, we need to change that when API is ready.
  // So, it's just a mock for now.
  getDenominator() {
    return this.props.activeTab === 'dai' ? 'DAI' : 'ETH'
  }

  componentWillMount() {
    this.props.getCurrencies()
  }

  render() {
    return (
      <ScreenContainer>
        <MaterialTabButtons
          active={this.props.activeTab}
          tabs={this.state.tabs}
          tabButtonPress={this.onTabPress}
        />
        <SearchInput
          name={'search'}
          theme={this.props.theme}
          placeholder={t('inputs.search.placeholder')}
          value={this.props.search}
          onChange={this.handleSearchChange}
        />
        <FlatList
          data={this.props.currencies}
          scrollEnabled={this.state.scroll}
          renderItem={({ item, index }) => (
            <CurrencyItem
              index={index}
              onCurrencyPress={this.handleCurrencyPress}
              onFavPress={this.handleFavPress}
              onDeletePress={this.handleDeletePress}
              denominator={this.getDenominator()}
              onGrant={this.handleGrant}
              onRelease={this.handleRelease}
              scroll={this.state.scroll}
              {...item}
            />
          )}
        />
      </ScreenContainer>
    )
  }
}

TradeHome.propTypes = {
  ...screenPropTypes,
  theme: PropTypes.object,
  searchText: PropTypes.string,
  currencies: PropTypes.array,
  setActiveTab: PropTypes.func,
  setActiveOrder: PropTypes.func,
  toggleFavorite: PropTypes.func,
  getCurrencies: PropTypes.func,
  setSearchText: PropTypes.func
}


export default TradeHome
