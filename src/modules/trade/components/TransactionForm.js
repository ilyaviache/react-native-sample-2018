import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import Yup from '../../../utils/yup'
import Icon from '../../../utils/icon'
import { t } from '../../../locales/i18n'

import { View, Text } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, SubmitContainer, ValidationError } from '../../../elements'
import { SectionHeader } from '../../../elements'
import { UnitsTextfield } from '../../../elements'
import { SuccessButton, DangerButton } from '../../../elements'

import FeeSelect from './FeeSelect'

const textInputStyle = {
  fontStyle: 'italic'
}

export default class TransactionForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({})
  }

  handleSubmit(values, actions) {
    this.props.onSend(values)
    actions.setSubmitting(false)
  }

  renderForm(props) {
    const { type } = this.props
    const {
      values,
      errors,
      touched,
      setFieldValue,
      isSubmitting,
      setFieldTouched,
      handleSubmit
    } = props
    return (
      <Wrapper>
        <Cell>
          <TransactionFormContainer>
            <FormHeaderContainer>
              <Icon size={16} name='wallet' />
              <TransactionSectionLabel right>2.214522 WETH</TransactionSectionLabel>
            </FormHeaderContainer>
            <FormGroup top={9} bottom={16}>
              <TransactionSectionHeader>{t('wallet.price')}</TransactionSectionHeader>
              <UnitsTextfield
                type='number'
                name='price'
                value={values.price}
                error={errors.price && touched.price}
                placeholder={t('inputs.amount.placeholder')}
                units='WETH'
                size='small'
                textInputStyle={textInputStyle}
                onBlur={setFieldTouched}
                onChange={setFieldValue}>
              </UnitsTextfield>
              {errors.price && touched.price && <ValidationError>{errors.price}</ValidationError>}
            </FormGroup>
            <FormGroup top={0}>
              <TransactionSectionHeader>{t('wallet.amount')}</TransactionSectionHeader>
              <FormHeaderContainer top={0} bottom={7}>
                <MaxLabel>{t('wallet.max')}</MaxLabel>
                <TransactionSectionLabel right>141.214 ZRX</TransactionSectionLabel>
              </FormHeaderContainer>
              <UnitsTextfield
                type='number'
                name='amount'
                value={values.amount}
                error={errors.amount && touched.amount}
                placeholder={t('inputs.amount.placeholder')}
                units='ZRX'
                size='small'
                textInputStyle={textInputStyle}
                onBlur={setFieldTouched}
                onChange={setFieldValue}>
              </UnitsTextfield>
              {errors.amount && touched.amount && <ValidationError>{errors.amount}</ValidationError>}
            </FormGroup>

            <FormHeaderContainer top={2}>
              <TransactionSectionLabel>{t('wallet.all')}</TransactionSectionLabel>
              <TransactionSectionLabel right>1.66666 WETH</TransactionSectionLabel>
            </FormHeaderContainer>

            <FormHeaderContainer top={1}>
              <TransactionSectionSubLabel></TransactionSectionSubLabel>
              <TransactionSectionSubLabel right>7234.00 CNY</TransactionSectionSubLabel>
            </FormHeaderContainer>

            <FormHeaderContainer top={8}>
              <TransactionSectionLabel>{t('wallet.fee')}</TransactionSectionLabel>
              <TransactionSectionLabel right>0.00 ZRX</TransactionSectionLabel>
            </FormHeaderContainer>

            <FormHeaderContainer top={3}>
              <TransactionSectionSubLabel></TransactionSectionSubLabel>
              <TransactionSectionSubLabel right>0.00 CNY</TransactionSectionSubLabel>
            </FormHeaderContainer>
          </TransactionFormContainer>
          <TransactionFormContainer>
            <FormGroup top={6}>
              <TransactionSectionHeader>{t('wallet.gas_price')}</TransactionSectionHeader>
              <TransactionSectionHeader right>0.00000 ETH</TransactionSectionHeader>
            </FormGroup>
          </TransactionFormContainer>
          <FormGroup top={2} bottom={6} >
            <FeeSelect />
          </FormGroup>
        </Cell>
        <Cell>
          <TransactionSubmitContainer>
            {type === 'buy' && <SuccessButton enabled={!isSubmitting} onPress={handleSubmit}>{t('inputs.buy')}</SuccessButton>}
            {type === 'sell' && <DangerButton enabled={!isSubmitting} onPress={handleSubmit}>{t('inputs.sell')}</DangerButton>}
          </TransactionSubmitContainer>
        </Cell>
      </Wrapper>
    )
  }

  render() {
    return (
      <BaseForm
        enableReinitialize
        initialValues={this.props.values}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        render={this.renderForm}
      />
    )
  }
}

TransactionForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  values: PropTypes.shape({
    gasLimit: PropTypes.string,
    gasPrice: PropTypes.string,
    price: PropTypes.string,
    amount: PropTypes.string
  })
}

TransactionForm.defaultProps = {
  type: 'buy',
  values: {
    gasLimit: '',
    gasPrice: '',
    price: '',
    amount: '',
  }
}

const Wrapper = styled(View) `
  background: ${prop('theme.colors.background')};
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const Cell = styled(View) `;
`

const TransactionFormContainer = styled(FormContainer) `
  padding: 6px 12px 0px;
  flex-direction: column;
  justify-content: flex-start;
`

const TransactionSubmitContainer = styled(SubmitContainer) `
  margin-top: 0px;
`

const FormHeaderContainer = styled(FormGroup) `
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

const MaxLabel = styled(Text) `
  font-family: ${prop('theme.typo.condensedFont')};
  color: ${prop('theme.colors.success')};
`

const TransactionSectionHeader = styled(SectionHeader) `
  margin-top: 0px;
  font-family: ${prop('theme.typo.condensedFont')};
  font-size: 15px;
  text-align: ${ifProp('right', 'right', 'left')}
`

const TransactionSectionLabel = styled(TransactionSectionHeader) `
  margin: 0;
  padding: 0;
`

const TransactionSectionSubLabel = styled(TransactionSectionHeader) `
  margin: 0;
  padding: 0;
  font-size: 11px;
`
