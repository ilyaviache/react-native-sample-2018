import React, { PureComponent } from 'react'
import { Dimensions } from 'react-native'
import { Table } from 'react-native-table-component'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

import Row from './Row'
import TouchableRow from './TouchableRow'

const headerTextStyle = theme => ({
  fontFamily: theme.typo.condensedFont,
  color: theme.colors.font,
  fontWeight: '500',
  fontSize: 13,
  textAlign: 'center',
  padding: 6
})

const textStyle = theme => ({
  fontFamily: theme.typo.condensedFont,
  color: theme.colors.font,
  fontWeight: '400',
  fontSize: 12,
  textAlign: 'center',
  padding: 9
})

const borderStyle = {
  borderWidth: 0
}

class DefaultTable extends PureComponent {

  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(el, i) {
    const { theme, flexArr, onRowPress } = this.props
    if (onRowPress){
      return (
        <TouchableRow
          onPress={onRowPress}
          borderStyle={borderStyle}
          key={i}
          i={i}
          data={el}
          textStyle={textStyle(theme)}
          flexArr={flexArr}
        />)
    }
    return (
      <Row
        borderStyle={borderStyle}
        key={i}
        data={el}
        textStyle={textStyle(theme)}
        flexArr={flexArr}
      />)
  }

  render() {
    const { head, data, flexArr, width, theme } = this.props
    const headless = !head || head.length === 0
    const empty = []

    let tableWidth = 'auto'
    if (width) {
      const screenWidth = Dimensions.get('window').width
      tableWidth = screenWidth > width ? screenWidth : width
    }
    return (
      <DTable width={tableWidth} borderStyle={borderStyle}>
        <DRow data={head} textStyle={headerTextStyle(theme)} flexArr={flexArr} />
        <Separator data={empty} show={!headless} />
        {
          data.map((el, i) => (this.renderRow(el, i)))
        }
      </DTable>
    )
  }
}

const DTable = styled(Table) `
  background: ${prop('theme.colors.nRow')};
  width: ${prop('width', 'auto')}
`

const DRow = styled(Row) `
  padding-top: 0px;
  padding-bottom: 0px;
  background: ${ifProp('even', prop('theme.colors.n2Row'), prop('theme.colors.nRow'))}
`

const Separator = styled(Row) `
  display: ${ifProp('show', 'flex', 'none')}
  height: 5px;
  borderTopWidth: 1px;
  borderBottomWidth: 1px;
  borderColor: ${prop('theme.colors.rowBorder')}
`

DefaultTable.propTypes = {
  head: PropTypes.array,
  data: PropTypes.array,
  flexArr: PropTypes.array,
  width: PropTypes.number,
  onRowPress: PropTypes.func,
  theme: PropTypes.object
}

DefaultTable.defaultProps = {
  head: [],
  data: []
}

export default withTheme(DefaultTable)
