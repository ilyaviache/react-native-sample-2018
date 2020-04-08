import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Immutable from 'seamless-immutable'
import { prop, ifProp } from 'styled-tools'

import { View, Text } from '../../../elements'
import { RadioGroup, Radio } from '../../../elements'

const radioTextStyle = () => ({
  fontWeight: '400',
  fontSize: 14
})

class FeeSelect extends PureComponent {

  constructor(props) {
    super(props)

    this.state = Immutable({
      gasPrice: props.gasPrice
    })

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(name, value) {
    this.setState(Immutable.merge(this.state, { [name]: value }))
  }

  render() {
    const { gasPrice } = this.state
    return (
      <Wrapper>
        <RadioGroup>
          {(group) => (
            <View>
              <Separator />
              <FeeRadioRow first>
                <FeeRadio textStyle={radioTextStyle()} group={group} name='gasPrice' value='1' onChecked={this.handleChange} checked={gasPrice === 1}>Slow</FeeRadio>
                <FeeRadioLabel>1 Gwei</FeeRadioLabel>
              </FeeRadioRow>
              <FeeRadioRow>
                <FeeRadio textStyle={radioTextStyle()} group={group} name='gasPrice' value='10' onChecked={this.handleChange} checked={gasPrice === 10}>Middle</FeeRadio>
                <FeeRadioLabel>10 Gwei</FeeRadioLabel>
              </FeeRadioRow>
              <FeeRadioRow>
                <FeeRadio textStyle={radioTextStyle()} group={group} name='gasPrice' value='20' onChecked={this.handleChange} checked={gasPrice === 20}>Fast</FeeRadio>
                <FeeRadioLabel>20 Gwei</FeeRadioLabel>
              </FeeRadioRow>
            </View>
          )}
        </RadioGroup>
      </Wrapper>
    )
  }
}

const Wrapper = styled(View) `
  padding-left: 6px;
  padding-right: 4px;
`

const FeeRadioRow = styled(View) `
  position: relative;
  margin-top: ${ifProp('first', '0px', '22px')};
`

const FeeRadioLabel = styled(Text) `
  position: absolute;
  right: 8;
  top: 14;
  color: ${prop('theme.colors.font')};
  fontWeight: 400;
  fontSize: 14;
`

const FeeRadio = styled(Radio) `
  borderWidth: 1;
  width: 12px;
  height: 12px;
  backgroundColor: ${prop('theme.colors.feeRadioBackground')};
  z-index: 3;
`

const Separator = styled(View) `
  position: absolute;
  top: 26;
  left: 12;
  width: 3;
  height: 115;
  background: ${prop('theme.colors.feeRadioBorder')};
`

FeeSelect.propTypes = {
  gasPrice: PropTypes.oneOf([1, 10, 20])
}

FeeSelect.defaultProps = {
  gasPrice: 1
}

export default FeeSelect
