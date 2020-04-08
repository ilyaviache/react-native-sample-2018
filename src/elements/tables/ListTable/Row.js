import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import { View, ListTableCell } from '../../index'

class Row extends PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'nextProps')
  }
  render() {
    const { data, flexAr, header, ...rest } = this.props
    return (
      <RowView {...this.props}>
        {data.map((elem, index) => (
          <Cell
            key={index}
            flexItem={flexAr[index]}
            {...rest}
          >
            <ListTableCell data={elem} bold={header} />
          </Cell>
        ))}
      </RowView>
    )
  }
}

Row.propTypes = {
  data: PropTypes.array,
  flexAr: PropTypes.array,
  header: PropTypes.bool,
  even: PropTypes.number,
  tableWidth: PropTypes.number
}

const RowView = styled(View) `
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 5px;
  background-color: ${ifProp('even', prop('theme.colors.n2Row'), prop('theme.colors.background'))}
`


const Cell = styled(View) `
  flex: ${prop('flexItem')};
  justify-content: center;
  align-items: center;
`


export default Row