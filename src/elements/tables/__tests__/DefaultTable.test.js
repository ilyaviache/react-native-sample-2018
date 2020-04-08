import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import { wrapWithTheme } from '../../../specs/utils'

import { Row } from 'react-native-table-component'
import DefaultTable from '../DefaultTable'

const setup = propOverrides => {
  const props = Object.assign({
    head: ['Head1', 'Head2', 'Head3'],
    data: [
      ['Data11', 'Data12', 'Data13'],
      ['Data21', 'Data22', 'Data23'],
      ['Data31', 'Data32', 'Data33'],
    ],
    flexArr: [1,1,1],
  }, propOverrides)

  const component = <DefaultTable {...props} />
  const tree = renderer
    .create(wrapWithTheme(component))

  return {
    props,
    tree,
    component
  }
}

describe('<DefaultTable />', () => {
  const { props, component, tree } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('TableSeparator is presented', () => {
    const separator = tree.root.findAllByType(Row)[1]
    expect(separator).not.toBeUndefined()
    expect(separator.props.data).toHaveLength(0)
    expect(separator.props.show).toBeTruthy()
    expect(separator.props.style[1][0].display).toBe('flex')
  })

  it('renders correct amount of rows', () => {
    const rows = tree.root.findAllByType(Row)
    // all rows minus header row and separator row
    expect(rows.length - 2).toEqual(props.data.length)
  })

  it('renders thead correctly', () => {
    const head = tree.root.findAllByType(Row)[0]
    expect(head).not.toBeUndefined()
    expect(head.props.data).toEqual(expect.arrayContaining(props.head))
  })

  describe('width: less than display width', () => {
    it('have style prop width: 750', () => {
      const { tree } = setup({ width: 300 })
      const table = tree.toJSON()
      expect(table.props.style[0][0].width).toEqual(750)
    })
  })

  describe('width: more than display width', () => {
    it('have style prop width equlas passed prop', () => {
      const { tree } = setup({ width: 920 })
      const table = tree.toJSON()
      expect(table.props.style[0][0].width).toEqual(920)
    })
  })

  describe('head: empty', () => {
    const { props, tree, component } = setup({ head: [] })
    itBehavesLike('aThemedComponent', { subject: component })

    it('TableSeparator is hidden', () => {
      const separator = tree.root.findAllByType(Row)[1]
      expect(separator).not.toBeUndefined()
      expect(separator.props.data).toHaveLength(0)
      expect(separator.props.show).toBeFalsy()
      expect(separator.props.style[1][0].display).toBe('none')
    })

    it('renders thead correctly', () => {
      const head = tree.root.findAllByType(Row)[0]
      expect(head).not.toBeUndefined()
      expect(head.props.data).toEqual(expect.arrayContaining(props.head))
    })
  })
})
