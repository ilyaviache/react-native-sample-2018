import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../../specs/shared_examples/index'

import HeaderMenuIcon from '../HeaderMenuIcon'

describe('<HeaderMenuIcon />', () => {
  itBehavesLike('aThemedComponent', { subject: <HeaderMenuIcon /> })
})
