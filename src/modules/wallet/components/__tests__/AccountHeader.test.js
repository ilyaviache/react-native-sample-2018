import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import AccountHeader from '../AccountHeader'

describe('<AccountHeader />', () => {
  itBehavesLike('aThemedComponent', { subject: <AccountHeader /> })
})
