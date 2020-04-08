import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Row from './Row'
import { TouchableOpacity } from '../index'

class TouchableRow extends PureComponent {

  constructor(props) {
    super(props)

    this.handleRowPress = this.handleRowPress.bind(this)
    this.normalizedData = this.normalizedData.bind(this)
  }

  normalizedData() {
    const { data } = this.props
    return data.map((el) => (el.props && el.props.children ? el.props.children : el))
  }

  handleRowPress() {
    const { onPress } = this.props
    onPress(this.normalizedData())
  }

  render() {
    const { data, i, flexArr, borderStyle, textStyle } = this.props

    return (
      <TouchableOpacity onPress={this.handleRowPress} >
        <Row
          borderStyle={borderStyle}
          even={i % 2}
          data={data}
          textStyle={textStyle}
          flexArr={flexArr}
        />
      </TouchableOpacity>
    )
  }
}

TouchableRow.propTypes = {
  data: PropTypes.array,
  i: PropTypes.number,
  borderStyle: PropTypes.object,
  textStyle: PropTypes.object,
  flexArr: PropTypes.array,
  onPress: PropTypes.func
}

TouchableRow.defaultProps = {
  el: [],
  i: 0
}

export default TouchableRow