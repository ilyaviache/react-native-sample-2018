import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Yup from '../../../utils/yup'
import { t } from '../../../locales/i18n'

import { SubmitContainer,  } from '../../../elements'
import { Textfield, Textarea } from '../../../elements'
import { SuccessButton } from '../../../elements'
import { BaseForm, FormContainer, FormGroup, ValidationError } from '../../../elements'

export default class ContactForm extends PureComponent {

  constructor(props) {
    super(props)

    this.validationSchema = this.validationSchema.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  validationSchema() {
    return Yup.object().shape({
      email: Yup.string().email(t('inputs.errors.email')).required(t('inputs.errors.required')),
      title: Yup.string().required(t('inputs.errors.required')),
      body: Yup.string().required(t('inputs.errors.required'))
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
        {['email', 'title'].map(key => (
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
        <FormGroup>
          <Textarea
            name={'body'}
            value={values.body}
            error={errors.body && touched.body}
            placeholder={t(`inputs.body.placeholder`)}
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            height={320}
          />
          {errors.body && touched.body && <ValidationError>{errors.body}</ValidationError>}
        </FormGroup>
        <SubmitContainer>
          <SuccessButton enabled={!isSubmitting} rounded onPress={handleSubmit}>{t('inputs.submit')}</SuccessButton>
        </SubmitContainer>
      </FormContainer>
    )
  }

  render() {
    return(
      <BaseForm
        initialValues={this.props.values}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        render={ this.renderForm }
      />
    )
  }
}

ContactForm.propTypes = {
  onSend: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
  })
}

ContactForm.defaultProps = {
  values: {
    email: '',
    title: '',
    body: ''
  }
}