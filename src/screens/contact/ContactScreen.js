import React, { PureComponent } from 'react'
import screenDefaultPropTypes from '../../utils/screenPropTypes'

import { KeyboardAvoidingContainer, ScrollContainer } from '../../elements'
import ContactForm from '../../modules/contact/components/ContactForm'

class Contact extends PureComponent {

  constructor(params) {
    super(params)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { navigation } = this.props
    navigation.goBack(navigation.state.key)
  }

  render() {
    return (
      <KeyboardAvoidingContainer behavior="padding">
        <ScrollContainer>
          <ContactForm onSend={this.handleSubmit} />
        </ScrollContainer>
      </KeyboardAvoidingContainer>
    )
  }
}

Contact.propTypes = {
  ...screenDefaultPropTypes
}

export default Contact
