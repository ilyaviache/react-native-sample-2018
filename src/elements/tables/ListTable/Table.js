import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import { FlatList, ScrollView } from 'react-native'
import { ListTableRow, View } from '../../index'

class Table extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      tableWidth: 0,
      buttonsOffset: 0
    }
    this.keyExtractor = this.keyExtractor.bind(this)
  }

  keyExtractor(item, index) {
    return index.toString()
  }

  render() {
    const { header, flexAr, scrollWidth, data, ...rest } = this.props
    return (
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TableView scrollWidth={scrollWidth}>
            {!!header &&
              <View>
                <ListTableRow header data={header} flexAr={flexAr} {...rest} />
                <RowBorder />
              </View>
            }
            <FlatList
              data={data}
              keyExtractor={this.keyExtractor}
              renderItem={({ item, index }) => (
                <ListTableRow
                  flexAr={flexAr}
                  key={index}
                  data={item}
                  even={index % 2}
                  {...rest}
                />
              )}
            />
          </TableView>
        </ScrollView>
      </Container>
    )
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.array,
  flexAr: PropTypes.array.isRequired,
  scrollWidth: PropTypes.number,
  stickyButton: PropTypes.node
}

const TableView = styled(View) `
  width: ${ifProp('scrollWidth', prop('scrollWidth') + 'px', 'auto')};
  position: relative;
`

const RowBorder = styled(View) `
  borderColor: ${prop('theme.colors.rowBorder')};
  borderBottomWidth: 1px;
  borderTopWidth: 1px;
  height: 5px;
`

const Container = styled(View) `
  display: flex;
  height: 100%;
  flex-direction: row;
`

export default Table