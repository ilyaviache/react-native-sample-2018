import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { KeyboardAvoidingView, View } from 'react-native'

class KeyboardAvodingContainer extends PureComponent {
  render() {
    const { children, ...rest } = this.props
    return (
      <Container {...rest}>
        {children}
        <Blob />
      </Container>
    )
  }
}

KeyboardAvodingContainer.propTypes = {
  children: PropTypes.node
}

const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.backgroundPage };
`

const Blob = styled(View)`
  height: 80px;
`

export default KeyboardAvodingContainer