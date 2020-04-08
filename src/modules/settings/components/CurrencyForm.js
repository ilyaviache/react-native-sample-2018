import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { t } from '../../../locales/i18n'

import { View } from '../../../elements'
import { SubmitContainer } from '../../../elements'
import { BaseForm, FormContainer } from '../../../elements'
import { RadioGroup, Radio } from '../../../elements'
import { SubmitButton } from '../../../elements'

export default class CurrencyForm extends PureComponent {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  handleSubmit(values, actions) {
    this.props.onSend(values)
    actions.setSubmitting(false)
  }

  renderForm(props) {
    const {
      values,
      setFieldValue,
      isSubmitting,
      handleSubmit
    } = props
    return (
      <FormContainer>
        <RadioGroup>
          {(group) => (
            <View>
              <Radio group={group} name='currency' value='CNY' onChecked={setFieldValue} checked={values.currency === 'CNY'}>CNY</Radio>
              <Radio group={group} name='currency' value='USD' onChecked={setFieldValue} checked={values.currency === 'USD'}>USD</Radio>
              <Radio group={group} name='currency' value='ETH' onChecked={setFieldValue} checked={values.currency === 'ETH'}>ETH</Radio>
            </View>
          )}
        </RadioGroup>
        <SmallSubmitContainer>
          <SubmitButton enabled={!isSubmitting} rounded onPress={handleSubmit}>{t('inputs.confirm')}</SubmitButton>
        </SmallSubmitContainer>
      </FormContainer>
    )
  }

  render() {
    return (
      <BaseForm
        initialValues={this.props.values}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        render={this.renderForm}
      />
    )
  }
}

CurrencyForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    locale: PropTypes.string
  })
}

CurrencyForm.defaultProps = {
  values: {
    currency: 'USD'
  }
}

const SmallSubmitContainer = styled(SubmitContainer) `
  padding: 0px 10px;
`
