import { connect } from 'react-redux'

import OrderTabHistory from '../components/OrderTabHistory'

import { selectTradeOrders, getTradeOrders } from '../../../redux/trade'

const mapStateToProps = (state) => ({
  orders: selectTradeOrders(state.trade)
})

const mapDispatchToProps = {
  getTradeOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTabHistory)
