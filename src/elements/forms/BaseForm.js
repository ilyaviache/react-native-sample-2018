import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

// Wrapper over Formik. For more info check the docs https://github.com/jaredpalmer/formik

export default class BaseForm extends PureComponent {
  render() {
    const {
      enableReinitialize,
      initialValues,
      validationSchema,
      validate,
      onSubmit,
      render
    } = this.props
    return (
      <Formik
        enableReinitialize={enableReinitialize}
        initialValues={initialValues}
        validationSchema={validationSchema}
        validate={validate}
        onSubmit={onSubmit}
        render={render}
      />
    )
  }
}

BaseForm.propTypes = {
  render: PropTypes.func.isRequired,
  enableReinitialize: PropTypes.bool,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.func,
  onSubmit: PropTypes.func,
  validate: PropTypes.func
}
