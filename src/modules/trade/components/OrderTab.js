import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import PropTypes from 'prop-types'

import { Text } from '../../../elements'

class OrderTab extends PureComponent {

  constructor(props) {
    super(props)
    this.handleTabPress = this.handleTabPress.bind(this)
  }

  handleTabPress() {
    this.props.onTabPress(this.props.value)
  }

  render() {
    const { label, active, last } = this.props
    return (
      <Tab
        onPress={this.handleTabPress}
        active={active}
        last={last}
      >
        <TabText
          active={active}
        >{label}</TabText>
      </Tab>
    )
  }
}

OrderTab.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onTabPress: PropTypes.func,
  active: PropTypes.bool,
  last: PropTypes.bool
}

const Tab = styled.TouchableOpacity `
  flex: 1;
  border-color: ${prop('theme.colors.background')};
  borderRightWidth: ${ifProp('last', 0, '1px')};
`

const TabText = styled(Text) `
padding: 4px 0;
text-align: center;
${ifProp('active',
    css`
    color: ${prop('theme.colors.primary')}
  `,
    css`
    color: ${prop('theme.colors.tradeOrderTabsColor')}
    background: ${prop('theme.colors.tradeOrderTabsBackground')}
  `
  )}
`

export default OrderTab
