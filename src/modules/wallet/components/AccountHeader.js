import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { PropTypes } from 'prop-types'
import Immutable from 'seamless-immutable'

import { t } from '../../../locales/i18n'

import { View, CopyButton } from '../../../elements'
import { SectionHeader } from '../../../elements'
import { EditableLabel } from '../../../elements'

class AccountHeader extends PureComponent {

  constructor(props) {
    super(props)

    this.state = Immutable({
      header: 'Account 1'
    })

    this.handleNameChangeSubmit = this.handleNameChangeSubmit.bind(this)
    this.renderWalletName = this.renderWalletName.bind(this)
  }

  handleNameChangeSubmit(value) {
    this.setState(Immutable.merge(this.state, { header: value }))
  }

  renderWalletName() {
    const { header } = this.state
    const { editable } = this.props

    if (!editable) {
      return (<HeaderLabel>{header}</HeaderLabel>)
    }

    return (
      <EditableLabel
        onSubmit={this.handleNameChangeSubmit}
        value={header}>
        <HeaderLabel>{header}</HeaderLabel>
      </EditableLabel>
    )
  }

  render() {
    return (
      <Wrapper>
        <FirstHeaderRow>
          <HeaderCol flex={3}>
          </HeaderCol>
          <HeaderCol flex={5}>
            {this.renderWalletName()}
            <Copy
              value={'0x9651fCa01B185e055E'}
            >0x9651fCa0...1B185e055E</Copy>
          </HeaderCol>
          <HeaderCol flex={3}></HeaderCol>
        </FirstHeaderRow>
        <HeaderRow>
          <HeaderCol flex={3}><HeaderLabel>{t('wallet.accountHeader.total')}</HeaderLabel></HeaderCol>
          <HeaderCol flex={5}></HeaderCol>
          <HeaderCol flex={3}><HeaderLabel>¥ 648,000.00</HeaderLabel></HeaderCol>
        </HeaderRow>
      </Wrapper>
    )
  }
}

AccountHeader.propTypes = {
  editable: PropTypes.bool
}

AccountHeader.defaultProps = {
  editable: false
}

const Wrapper = styled(View)`
  padding: 10px 12px;
  flex-direction: column;
  background: ${prop('theme.colors.backgroundMenu')};
  align-items: stretch;
  justify-content: space-between;
`

const HeaderRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

const FirstHeaderRow = styled(HeaderRow)`
  margin-bottom: 20px;
`

const HeaderCol = styled(View)`
  flex: ${ prop('flex', 1)}
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderLabel = styled(SectionHeader)`
  color: ${prop('theme.colors.accountHeaderColor')};
  margin-bottom: 0px;
`

const Copy = styled(CopyButton)`
  margin-top: 10px;
`

const HeaderSmallLabel = styled(HeaderLabel)`
  margin-top: 6px;
  font-size: 10px;
`

export default AccountHeader