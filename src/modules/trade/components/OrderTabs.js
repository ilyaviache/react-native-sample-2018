import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { View } from '../../../elements'

import OrderTab from './OrderTab'

class OrderTabs extends PureComponent {
  render() {
    const { tabs } = this.props
    return (
      <TabsContainer>
        {tabs.map((tab, i) => (
          <OrderTab 
            key={tab.value}
            active={this.props.active === tab.value}
            last={this.props.tabs.length - 1 === i}
            {...tab} 
            onTabPress={this.props.onTabPress}
          />
        ))}
      </TabsContainer>
    )
  }
}

OrderTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  onTabPress: PropTypes.func,
  active: PropTypes.string
}

const TabsContainer = styled(View)`
  display: flex;
  flex-direction: row;
`

export default OrderTabs
