import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'

// import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { BottomTranslateContainer,
         ScreenContainer,
         StickyScrollContainer,
         StickyButtonContainer,
         ViewContainer } from '../../../elements'
import { SubmitButton } from '../../../elements'
import { Ul, Li } from '../../../elements'

import CurrencyItem from '../../../modules/wallet/components/CurrencyItem'
import AccountHeaderContainer from '../../../modules/wallet/containers/AccountHeaderContainer'
import TransactionForm from '../../../modules/wallet/components/TransactionForm'

export default class WalletAccountHome extends PureComponent {

  constructor(props) {
    super(props)

    this.state = Immutable({
      showTransactionForm: false
    })

    this.isLastCurrency = this.isLastCurrency.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleCurrencyPress = this.handleCurrencyPress.bind(this)
    this.handleCurrencyCheckboxChange = this.handleCurrencyCheckboxChange.bind(this)

    this.showTransactionForm = this.showTransactionForm.bind(this)
    this.hideTransactionForm = this.hideTransactionForm.bind(this)

    this.handleSendTransaction = this.handleSendTransaction.bind(this)
    this.handleCancelTransaction = this.handleCancelTransaction.bind(this)
  }

  componentDidMount() {
    this.props.getCurrencies()
  }

  isLastCurrency(index) {
    return this.props.currencies.length === index + 1
  }

  handleCurrencyPress(event) {
    console.log(event)
  }

  handleCurrencyCheckboxChange(event) {
    event.checked ? this.showTransactionForm() : this.hideTransactionForm()
  }

  showTransactionForm() {
    this.setState(
      Immutable.merge(this.state, { showTransactionForm: true })
    )
  }

  hideTransactionForm() {
    this.setState(
      Immutable.merge(this.state, { showTransactionForm: false })
    )
  }

  handleButtonClick() {
    const { navigation } = this.props
    navigation.navigate('WalletTradeHistory')
  }

  handleSendTransaction() {
    this.hideTransactionForm()
  }

  handleCancelTransaction() {
    this.hideTransactionForm()
  }

  render() {
    const { showTransactionForm } = this.state
    const { currencies } = this.props
    return (
      <ScreenContainer>
        <StickyScrollContainer fullheight disabled={showTransactionForm}>
          <AccountHeaderContainer editable />
          <ViewContainer>
            <Ul>
              {currencies.map((curr, i) => (
                <Li key={i} border={!this.isLastCurrency(i)}>
                  <CurrencyItem
                    key={i}
                    index={i}
                    onCurrencyPress={this.handleCurrencyPress}
                    onCheckboxChanged={this.handleCurrencyCheckboxChange}
                    {...curr}
                  />
                </Li>
              ))}
            </Ul>
          </ViewContainer>
        </StickyScrollContainer>
        <StickyButtonContainer>
          <SubmitButton onPress={this.handleButtonClick}>Trade History</SubmitButton>
        </StickyButtonContainer>
        <BottomTranslateContainer active={showTransactionForm} >
          <TransactionForm onSend={this.handleSendTransaction} onCancel={this.handleCancelTransaction} />
        </BottomTranslateContainer>
      </ScreenContainer>
    )
  }
}

WalletAccountHome.propTypes = {
  ...screenDefaultPropTypes,
  getCurrencies: PropTypes.func,
  currencies: PropTypes.array
}
