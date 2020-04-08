import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import CustomIcon from '../../../utils/icon'

import { Text, View } from '../../../elements'

class OrderMenuTitle extends PureComponent {

  componentWillMount() {
    // const param = this.props.navigation.getParam
    // console.log(param, 'param')
  }

  render() {
    const { favorite, leftPair, rightPair } = this.props.selectedPair
    return (
      <TitleView>
          {favorite
            ? <FullIcon name='full-star' />
            : <StarIcon name='outline-star' />
          }
        <Title>{leftPair}</Title>
        <ArrowIcon name='cross-arrows' />
        <Title>{rightPair}</Title>
        {/* <ArrowIcon name='selection-arrow' size={9}/> */}
      </TitleView>
    )
  }
}

OrderMenuTitle.propTypes = {
  navigation: PropTypes.object.isRequired,
  selectedPair: PropTypes.object
}

const Title = styled(Text) `
  font-weight: bold;
  font-size: 17px;
`

const TitleView = styled(View) `
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StarIcon = styled(CustomIcon) `
  margin-right: 5px;
`

const FullIcon = styled(StarIcon) `
  color: ${prop('theme.colors.primary')}
`

const ArrowIcon = styled(CustomIcon) `
  color: ${prop('theme.colors.success')}
  margin: 0 5px;
`

export default OrderMenuTitle
