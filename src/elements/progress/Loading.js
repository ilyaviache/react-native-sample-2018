import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { View, Text } from '../index'

class Loading extends PureComponent {
  render() {
    return (
      <Container>
        {/* TODO: change for rotating icon */}
        <Text>Loading</Text>
      </Container>
    )
  }
}

const Container = styled(View) ``

export default Loading
