import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import FormContainer from '../FormContainer'

describe('<FormContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <FormContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <FormContainer /> })
})
