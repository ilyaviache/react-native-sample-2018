import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import { t } from '../../../locales/i18n'

import { SubmitContainer, } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, ValidationError } from '../../../elements'
import { Textfield } from '../../../elements'
import { SubmitButton } from '../../../elements'

export default class PasswordForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      password: Yup.string().required(t('inputs.errors.required')),
      password_new: Yup.string().required(t('inputs.errors.required')),
      password_repeat: Yup.string().equalTo(Yup.ref('password_new'), t('inputs.errors.match')).required(t('inputs.errors.required'))
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
          {['password', 'password_new', 'password_repeat'].map( key => (
            <FormGroup key={key}>
              <Textfield
                name={key}
                type='password'
                value={values[key]}
                error={errors[key] && touched[key]}
                placeholder={t(`inputs.${key}.placeholder`)}
                onBlur={setFieldTouched}
                onChange={setFieldValue} />
                { errors[key] && touched[key] && <ValidationError>{errors[key]}</ValidationError> }
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

PasswordForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    password: PropTypes.string,
    password_new: PropTypes.string,
    password_repeat: PropTypes.string
  })
}

PasswordForm.defaultProps = {
  values: {
    password: '',
    password_new: '',
    password_repeat: ''
  }
}

