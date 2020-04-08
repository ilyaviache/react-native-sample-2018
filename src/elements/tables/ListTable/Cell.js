import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import { Text } from '../../index'

class Cell extends PureComponent {

  renderCell() {
    const { data } = this.props
    if (React.isValidElement(data)) {
      return React.cloneElement(
        data,
        { index: this.props.index }
      )
    }
    return <CellText {...this.props}>{data}</CellText>
  }

  render() {
    return this.renderCell()
  }

}

Cell.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.elemet]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  bold: PropTypes.bool,
  width: PropTypes.number,
  index: PropTypes.number
}

const CellText = styled(Text) `
  font-size: 12px;
  line-height: 15px;
  ${ifProp('bold', css`
    font-weight: 700;
  `)}
`

export default Cell