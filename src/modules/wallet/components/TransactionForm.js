import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import Yup from '../../../utils/yup'
import { t } from '../../../locales/i18n'

import { View } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, StickyButtonContainer } from '../../../elements'
import { SectionHeader } from '../../../elements'
import { UnitsTextfield } from '../../../elements'
import { SuccessButton, DangerButton } from '../../../elements'

export default class TransactionForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      gasPrice: Yup.string().required(t('inputs.errors.required')),
      gasLimit: Yup.string().required(t('inputs.errors.required'))
    })
  }

  handleSubmit(values, actions) {
    this.props.onSend(values)
    actions.setSubmitting(false)
  }

  handleReset() {
    this.props.onCancel()
  }

  renderForm(props) {
    const {
      values,
      errors,
      touched,
      setFieldValue,
      isSubmitting,
      handleSubmit,
      handleReset,
      setFieldTouched
    } = props
    return (
      <Wrapper>
        <TransactionFormContainer>
          <TransactionFormGroup>
            <TransactionSectionHeader>{t('wallet.gas_limit')}</TransactionSectionHeader>
            <UnitsTextfield
              type='number'
              name='gasPrice'
              value={values.gasPrice}
              error={errors.gasPrice && touched.gasPrice}
              placeholder={t('inputs.amount.placeholder')}
              units='UNITS'
              size='small'
              onBlur={setFieldTouched}
              onChange={setFieldValue}>
            </UnitsTextfield>
          </TransactionFormGroup>
          <LastTransactionFormGroup>
            <TransactionSectionHeader>{t('wallet.gas_price')}</TransactionSectionHeader>
            <UnitsTextfield
              type='number'
              name='gasLimit'
              value={values.gasLimit}
              error={errors.gasLimit && touched.gasLimit}
              placeholder={t('inputs.amount.placeholder')}
              units='GWEI'
              size='small'
              onBlur={setFieldTouched}
              onChange={setFieldValue}>
            </UnitsTextfield>
          </LastTransactionFormGroup>
          <TransactionLabelContainer>
            <TransactionSectionHeader>{t('wallet.transaction_fee')}</TransactionSectionHeader>
            <TransactionSectionHeader right>0.00000 ETH</TransactionSectionHeader>
          </TransactionLabelContainer>
        </TransactionFormContainer>

        <StickyButtonContainer>
          <SuccessButton enabled={!isSubmitting} onPress={handleSubmit}>{t('inputs.ok')}</SuccessButton>
          <DangerButton onPress={handleReset}>{t('inputs.cancel')}</DangerButton>
        </StickyButtonContainer>
      </Wrapper>
    )
  }

  render() {
    return (
      <BaseForm
        initialValues={this.props.values}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        render={this.renderForm}
      />
    )
  }
}

TransactionForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  values: PropTypes.shape({
    gasLimit: PropTypes.string,
    gasPrice: PropTypes.string
  })
}

TransactionForm.defaultProps = {
  values: {
    gasLimit: '12',
    gasPrice: '10'
  }
}

const Wrapper = styled(View) `
  background: ${prop('theme.colors.background')};
  flex-direction: row;
  justify-content: center;
`

const TransactionFormContainer = styled(FormContainer) `
  width: 56%
`

const TransactionSectionHeader = styled(SectionHeader) `
  margin-top: 0px;
  font-family: ${prop('theme.typo.condensedFont')};
  font-size: 14px;
  text-align: ${ifProp('right', 'right', 'left')}
`

const TransactionFormGroup = styled(FormGroup) `
  margin-top: 10px;
`

const LastTransactionFormGroup = styled(FormGroup) `
  margin-top: 0px;
`

const TransactionLabelContainer = styled(FormGroup) `
  margin-top: 4px;
  margin-bottom: 56px;
`
