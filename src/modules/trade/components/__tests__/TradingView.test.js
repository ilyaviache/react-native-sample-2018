import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import TradingView from '../TradingView'

const setup = propOverrides => {
  const props = Object.assign({
    url: 'https://s3-ap-southeast-1.amazonaws.com/tokenjar/mobile_white.html'
  }, propOverrides)

  const component = <TradingView {...props} />

  return {
    props,
    component
  }
}

describe('<TradingView />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})