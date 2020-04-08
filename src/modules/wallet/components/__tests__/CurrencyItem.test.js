import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import CurrencyItem from '../CurrencyItem'

describe('<CurrencyItem />', () => {
  itBehavesLike('aThemedComponent', { subject: <CurrencyItem /> })
})
