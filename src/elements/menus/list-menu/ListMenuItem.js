import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View, Text, TouchableHighlight } from '../../index'
import Icon from '../../../utils/icon'

class ListMenuItem extends PureComponent {

  constructor(params) {
    super(params)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { name, onPress } = this.props
    if(onPress) { onPress(name) }
  }

  render() {
    const { text, children, separator, className } = this.props
    return(
      <TouchableHighlight onPress={ this.handleClick }>
        <Wrapper
          separator={ separator }
          className={ className }>

          <Label>{ text }</Label>
          { children || <Icon name='right-arrow' size={12}></Icon> }
        </Wrapper>
      </TouchableHighlight>
    )
  }
}

ListMenuItem.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  separator: PropTypes.bool,
  onPress: PropTypes.func
}

const Wrapper = styled(View) `
  height: 45px;
  padding: 0px 20px 0px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({ theme }) => theme.colors.backgroundPage };
  borderBottomWidth: ${ ({ separator }) => separator ? 6 : 1 };
  borderBottomColor: ${ ({ separator, theme }) => separator ? theme.colors.background : theme.colors.border };
`

const Label = styled(Text) `
  font-family: Lato;
`

export default ListMenuItem