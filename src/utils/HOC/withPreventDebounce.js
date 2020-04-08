import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'

const withPreventDebounce = (WrappedComponent) => {
  class PreventDebounce extends PureComponent {
    constructor(props) {
      super(props)
      this.debounceOnPress = this.debounceOnPress.bind(this)
      this.handlePress = debounce(this.debounceOnPress, 200)
    }
    debounceOnPress(event) {
      this.props.onPress && this.props.onPress(event)
    }
    render() {
      return (
        <WrappedComponent {...this.props} onPress={this.handlePress} />
      )
    }
  }
  PreventDebounce.propTypes = {
    onPress: PropTypes.func
  }
  PreventDebounce.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`
  return PreventDebounce
}

export default withPreventDebounce