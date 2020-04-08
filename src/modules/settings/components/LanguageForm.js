import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { t } from '../../../locales/i18n'

import { View } from '../../../elements'
import { SubmitContainer } from '../../../elements'
import { BaseForm, FormContainer } from '../../../elements'
import { RadioGroup, Radio } from '../../../elements'
import { SubmitButton } from '../../../elements'

export default class LanguageForm extends PureComponent {

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
              <Radio group={group} name='locale' value='cn' onChecked={setFieldValue} checked={values.locale === 'cn'}>中文</Radio>
              <Radio group={group} name='locale' value='en' onChecked={setFieldValue} checked={values.locale === 'en'}>English</Radio>
              <Radio group={group} name='locale' value='ru' onChecked={setFieldValue} checked={values.locale === 'ru'}>Русский</Radio>
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

LanguageForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    locale: PropTypes.string
  })
}

LanguageForm.defaultProps = {
  values: {
    locale: 'en'
  }
}

const SmallSubmitContainer = styled(SubmitContainer) `
  padding: 0px 10px;
`
