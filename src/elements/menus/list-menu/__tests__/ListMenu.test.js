import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../../specs/shared_examples/index'

import ListMenu from '../ListMenu'

describe('<ListMenu />', () => {
  itBehavesLike('aThemedComponent', { subject: <ListMenu /> })
  itBehavesLike('aComponentWithChildren', { subject: <ListMenu /> })
})
