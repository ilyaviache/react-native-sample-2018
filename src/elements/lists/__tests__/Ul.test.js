import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import Ul from '../Ul'
import Li from '../Li'

describe('<SearchInput />', () => {

  itBehavesLike('aThemedComponent', {
    subject: <Ul>
      <Li>1</Li>
      <Li>2</Li>
      <Li>3</Li>
    </Ul> })
})
