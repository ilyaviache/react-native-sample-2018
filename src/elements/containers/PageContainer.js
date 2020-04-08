import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

export default class PageContainer extends PureComponent {
  render() {
    const { children, ...rest } = this.props
    return(
      <Element {...rest}>
        {children}
      </Element>
    )
  }
}

PageContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.backgroundPage };
`
