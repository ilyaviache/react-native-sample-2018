import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import Icon from '../../../utils/icon'
import { t } from '../../../locales/i18n'

import { SubmitContainer, } from '../../../elements'
import { IconTextfield } from '../../../elements'
import { SubmitButton } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, ValidationError } from '../../../elements'

export default class PasswordForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      password: Yup.string().required(t('inputs.errors.required'))
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
        <FormGroup key={'password'}>
          <IconTextfield
            name={'password'}
            value={values.password}
            error={errors.password && touched.password}
            placeholder={t(`inputs.${'password'}.placeholder`)}
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            type={'password'} >
            <Icon name='password' size={16} />
          </IconTextfield>
          {errors.password && touched.password && <ValidationError>{errors.password}</ValidationError>}
        </FormGroup>
        <SubmitContainer>
          <SubmitButton enabled={!isSubmitting} rounded onPress={handleSubmit}>{t('inputs.submit')}</SubmitButton>
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
    password: PropTypes.string
  })
}

PasswordForm.defaultProps = {
  values: {
    password: ''
  }
}