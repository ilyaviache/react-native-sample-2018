import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { View, ListTable } from '../../../elements'

class OrderTabHistory extends PureComponent {

  componentDidMount() {
    this.props.getTradeOrders()
  }

  render() {
    const tableHead = ['Time', 'Pair', 'Type', 'Price (WETH)', 'Total (WETH)', 'Fee (ZRX)']
    return (
      <Container>
        <ListTable
          width={540}
          data={this.props.orders}
          header={tableHead}
          flexAr={[2, 2, 1, 2, 2, 2, 1]}
        />
      </Container>
    )
  }
}

OrderTabHistory.propTypes = {
  orders: PropTypes.array,
  getTradeOrders: PropTypes.func
}

OrderTabHistory.defaultProps = {
  orders: []
}

const Container = styled(View) ``

export default OrderTabHistory