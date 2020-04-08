import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { View } from '../../../elements'

import OrderTabHistory from '../containers/OrderTabHistory'
import OrderTabOrders from './OrderTabOrders'

class OrderTabContainer extends PureComponent {

  constructor(props) {
    super(props)
    this.getActiveTab = this.getActiveTab.bind(this)
  }

  getActiveTab() {
    switch (this.props.activeTab) {
    case 'history':
      return <OrderTabHistory />
    case 'orders':
      return <OrderTabOrders />
    }
  }

  render() {
    return (
      <Container>
        {this.getActiveTab()}
      </Container>
    )
  }
}

const Container = styled(View) `
  display: flex;
  flex: 1;
`

OrderTabContainer.propTypes = {
  activeTab: PropTypes.oneOf(['fav', 'history', 'orders'])
}

export default OrderTabContainer
