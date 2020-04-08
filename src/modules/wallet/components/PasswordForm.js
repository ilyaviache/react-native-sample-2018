import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import Icon from '../../../utils/icon'
import { t } from '../../../locales/i18n'

import { SubmitContainer, } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, ValidationError } from '../../../elements'
import { IconTextfield } from '../../../elements'
import { SubmitButton } from '../../../elements'
import { WarningLabel } from '../../../elements'

import TermsCheckboxContainer from '../containers/TermsCheckboxContainer'

export default class PasswordForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.handleTermsChange = this.handleTermsChange.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      password: Yup.string().required(t('inputs.errors.required')),
      password_repeat: Yup.string().equalTo(Yup.ref('password'), t('inputs.errors.match')).required(t('inputs.errors.required'))
    })
  }

  handleSubmit(values, actions) {
    this.props.onSend(values)
    actions.setSubmitting(false)
  }

  handleTermsChange(event) {
    console.log('event', event)
  }

  renderForm(props) {
    const { reset } = this.props
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
        {reset && <WarningLabel>{t('wallet.reset_password_aware')}</WarningLabel> }
        {['password', 'password_repeat'].map(key => (
          <FormGroup key={key}>
            <IconTextfield
              name={key}
              type='password'
              value={values[key]}
              error={errors[key] && touched[key]}
              placeholder={t(`inputs.${key}.placeholder`)}
              onBlur={setFieldTouched}
              onChange={setFieldValue}>
              <Icon name='password' size={16} />
            </IconTextfield>
            {errors[key] && touched[key] && <ValidationError>{errors[key]}</ValidationError>}
          </FormGroup>
        ))}
        <TermsCheckboxContainer onCheckboxChange={this.handleTermsChange} />
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

PasswordForm.propTypes = {
  reset: PropTypes.bool,
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    password: PropTypes.string,
    password_repeat: PropTypes.string
  })
}

PasswordForm.defaultProps = {
  values: {
    password: '',
    password_repeat: ''
  }
}
