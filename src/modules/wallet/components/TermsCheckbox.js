import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { t } from '../../../locales/i18n'

import { View } from '../../../elements'
import { Checkbox } from '../../../elements'
import { A } from '../../../elements'

class TermsCheckbox extends PureComponent {

  constructor(props) {
    super(props)

    this.handleTermsClick = this.handleTermsClick.bind(this)
  }

  handleTermsClick() {
    this.props.navigation.navigate('SettingsTerms')
  }

  render() {
    const { onCheckboxChange } = this.props
    return (
      <Wrapper>
        <Element onCheckedChange={onCheckboxChange} inset={1}>{t('inputs.terms.text')} <A onPress={this.handleTermsClick}>{t('inputs.terms.link')}</A></Element>
      </Wrapper>
    )
  }
}

TermsCheckbox.propTypes = {
  navigation: PropTypes.object,
  onCheckboxChange: PropTypes.func
}

const Wrapper = styled(View) `
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: -20px;
`

const Element = styled(Checkbox) `
  width: 15px;
  height: 15px;
`

export default TermsCheckbox