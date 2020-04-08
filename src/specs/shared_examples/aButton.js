import 'react-native'
import 'jest-styled-components/native'


export default ({ wrapper, props }) => {
  it('size: renders correctly', () => {
    wrapper.setProps(props)
    wrapper.setProps({ size: 'large' })
    expect(wrapper).toMatchSnapshot()
  })

  it('rounded: renders correctly', () => {
    wrapper.setProps(props)
    wrapper.setProps({ rounded: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('enabled: renders correctly', () => {
    wrapper.setProps(props)
    wrapper.setProps({ enabled: false })
    expect(wrapper).toMatchSnapshot()
  })

  it('onPress: properly fires when button pressed', () => {
    wrapper.setProps(props)
    wrapper.children().simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('onPress: don\'t fires event when button disabled', () => {
    wrapper.setProps(props)
    wrapper.setProps({ enabled: false })
    wrapper.children().simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(0)
    expect(wrapper).toMatchSnapshot()
  })
}