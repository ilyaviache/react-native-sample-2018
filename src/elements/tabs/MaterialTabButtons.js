import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


import { View, MaterialTabButton } from '../index'

class MaterialTabButtons extends PureComponent {
  render() {
    return (
      <Container>
        {this.props.tabs.map(tab => (
          <MaterialTabButton
            active={tab.value === this.props.active}
            key={tab.value}
            value={tab.value}
            buttonPress={this.props.tabButtonPress}
          >
            { tab.label }
          </MaterialTabButton>
        ))
        }
      </Container>
    )
  }
}

MaterialTabButtons.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tabButtonPress: PropTypes.func
}


const Container = styled(View) `
  display: flex;
  flex-direction: row;
`

export default MaterialTabButtons
