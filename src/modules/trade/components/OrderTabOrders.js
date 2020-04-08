import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { View, GreenLabel, RedLabel, ListTable } from '../../../elements'
import OrderTableDeleteButton from './OrderTableDeleteButton'

class OrderTabOrders extends PureComponent {
  constructor(props) {
    super(props)
    this.handleDeletePress = this.handleDeletePress.bind(this)
    this.mapTableData = this.mapTableData.bind(this)
  }
  handleDeletePress(event) {
    console.log(event, 'handleDeletePress Order Tab')
  }

  mapTableData(tableData) {
    return tableData.map((item) => [...item, <OrderTableDeleteButton onPress={this.handleDeletePress} />])
  }

  render() {
    const tableHead = ['Time', 'Pair', 'Type', 'Price (WETH)', 'Total (WETH)', 'Fee (ZRX)', '']
    const tableData = [
      ['22/01/04 14:11:38', 'MRX/WETH', <RedLabel>Sell</RedLabel>, '0.01617607', '0.01617607', '0.00'],
      ['22/01/04 14:11:38', 'MRX/WETH', <GreenLabel>Buy</GreenLabel>, '0.01617607', '0.01617607', '0.00'],
    ]
    return (
      <Container>
        <ListTable
          width={540}
          header={tableHead}
          data={this.mapTableData(tableData)}
          flexAr={[2, 2, 1, 2, 2, 2, 1]}
        />
      </Container>
    )
  }
}

const Container = styled(View) ``

export default OrderTabOrders
