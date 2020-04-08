import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import { t } from '../../../locales/i18n'

import { View, Text, RobotoText } from '../../../elements'
import { SimpleButton, SimpleTextfield, Checkbox } from '../../../elements'

class CurrencyItem extends PureComponent {

  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handlePress() {
    this.props.onCurrencyPress(this.props.index)
  }

  handleCheckboxChange(event) {
    this.props.onCheckboxChanged(event)
  }

  render() {
    const { index } = this.props
    return (
      <CardContainer onPress={this.handlePress}>
        <Cell flex={1}>
          <Shortcut>ETH</Shortcut>
          <Title>5.4444</Title>
          <Vol>¥ 32,400.00</Vol>
        </Cell>
        { index === 0 && <Cell flex={2} rightSided={Boolean(true)}>
          <Row>
            <SimpleButton active={false}>{t('inputs.unwrap')}</SimpleButton>
            <SimpleButton active>{t('inputs.wrap')}</SimpleButton>
          </Row>
          <SecondRow>
            <SimpleTextfield name='test' value='' />
            <SimpleButton active>{t('inputs.wrap')}</SimpleButton>
          </SecondRow>
        </Cell> }
        {index === 1 && <Cell rightSided={Boolean(true)}>
          <Row>
            <Checkbox onCheckedChange={this.handleCheckboxChange} />
          </Row>
        </Cell>}
      </CardContainer>
    )
  }
}

CurrencyItem.propTypes = {
  onCurrencyPress: PropTypes.func,
  onCheckboxChanged: PropTypes.func,
  index: PropTypes.number.isRequired
}

const CardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`
const Shortcut = styled(RobotoText) `
  font-size: 12px;
  color: ${prop('theme.colors.primary')};
`

const Title = styled(Text) `
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`

const Cell = styled(View) `
  flex: ${prop('flex', 'none')}
  margin-left: ${ifProp({ rightSided: true }, 'auto', '0')};
`

const Row = styled(View) `
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`

const SecondRow = styled(Row) `
  margin-top: 4px;
`

const Vol = styled(RobotoText) `
  color: ${({ theme }) => theme.colors.fontBlinked}
  font-size: 11px;
  line-height: 12px;
`

export default CurrencyItem
