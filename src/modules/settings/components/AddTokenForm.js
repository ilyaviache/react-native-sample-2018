import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import { t } from '../../../locales/i18n'

import { SubmitContainer, } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, ValidationError } from '../../../elements'
import { Textfield } from '../../../elements'
import { SubmitButton } from '../../../elements'

export default class AddTokenForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      token_name: Yup.string().required(t('inputs.errors.required'))
    })
  }

  handleSubmit(values, actions) {
    this.props.onSend(values)
    actions.setSubmitting(false)
  }

  renderForm(props) {
    const {
      values,
      errors,
      touched,
      setFieldValue,
      isSubmitting,
      handleSubmit,
      setFieldTouched
    } = props
    return (
      <FormContainer>
        {['token_name'].map(key => (
          <FormGroup key={key}>
            <Textfield
              name={key}
              value={values[key]}
              error={errors[key] && touched[key]}
              placeholder={t(`inputs.${key}.placeholder`)}
              onBlur={setFieldTouched}
              onChange={setFieldValue} />
            {errors[key] && touched[key] && <ValidationError>{errors[key]}</ValidationError>}
          </FormGroup>
        ))}
        <SubmitContainer>
          <SubmitButton enabled={!isSubmitting} rounded onPress={handleSubmit}>{t('inputs.confirm')}</SubmitButton>
        </SubmitContainer>
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

AddTokenForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    token_name: PropTypes.string
  })
}

AddTokenForm.defaultProps = {
  values: {
    token_name: ''
  }
}
