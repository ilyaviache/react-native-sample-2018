import 'react-native'
import renderer from 'react-test-renderer'
import 'jest-styled-components/native'

import { wrapWithTheme } from '../utils'

export default ({ subject }) => {
  it('light: renders correctly', () => {
    const tree = renderer
      .create(wrapWithTheme(subject, 'light'))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('dark: renders correctly', () => {
    const tree = renderer
      .create(wrapWithTheme(subject, 'dark'))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
}