import { Row } from 'react-native-table-component'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

export default styled(Row) `
  padding-top: 0px;
  padding-bottom: 0px;
  background: ${ifProp('even', prop('theme.colors.n2Row'), prop('theme.colors.nRow'))}
`