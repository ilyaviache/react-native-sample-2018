import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'
import Immutable from 'seamless-immutable'
import defaultsDeep from 'lodash/defaultsDeep'

import Icon from '../../utils/icon'

import Textfield from './Textfield'
import { TouchableOpacity, View } from '../index'
import { SubmitButton, SubmitContainer } from '../index'

const defaultTextInputStyle = () => ({
  width: 70,
  color: '#fff'
})

class EditableLabel extends PureComponent {

  constructor(props) {
    super(props)

    this.state = Immutable({
      editMode: false,
      value: props.value
    })

    this.activateEditMode = this.activateEditMode.bind(this)
    this.deactivateEditMode = this.deactivateEditMode.bind(this)
    this.handleTextWrapperPress = this.handleTextWrapperPress.bind(this)
    this.handleEditWrapperPress = this.handleEditWrapperPress.bind(this)

    this.handleChange = this.handleChange.bind(this)
  }

  activateEditMode() {
    this.setState(
      Immutable.merge(this.state, { editMode: true })
    )
  }

  deactivateEditMode() {
    this.setState(Immutable.merge(this.state, { editMode: false }))
  }

  handleTextWrapperPress() {
    this.activateEditMode()
  }

  handleEditWrapperPress() {
    const { onSubmit } = this.props
    const { value } = this.state
    this.deactivateEditMode()
    if (onSubmit) { onSubmit(value) }
  }

  handleChange(name, value) {
    this.setState(Immutable.merge(this.state, { [name]: value }))
  }

  render() {
    const { editMode, value } = this.state
    const { children, textInputStyle, ...textFieldParams } = this.props
    return (
      <Wrapper>
        {!editMode && <TextWrapper onPress={this.handleTextWrapperPress}>
          {children}
          <EditIcon name='edit' size={14} />
        </TextWrapper>}
        {editMode && <EditWrapper>
          <Textfield
            onChange={this.handleChange}
            name={'value'}
            value={value}
            textInputStyle={defaultsDeep(textInputStyle, defaultTextInputStyle())}
            onSubmitEditing={this.handleEditWrapperPress}
            {...textFieldParams}
          />
          <EditSubmitContainer>
            {/* <EditSubmitButton onPress={this.handleEditWrapperPress}>OK</EditSubmitButton> */}
          </EditSubmitContainer>
        </EditWrapper>}
      </Wrapper>
    )
  }
}

EditableLabel.propTypes = {
  children: PropTypes.node,
  textInputStyle: PropTypes.object,
  value: PropTypes.string,
  onSubmit: PropTypes.func
}

const Wrapper = styled(View)`

`

const TextWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: baseline;
`

const EditWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

const EditIcon = styled(Icon)`
  color: ${prop('theme.colors.accountHeaderColor')};
  margin-left: 6px;
  margin-bottom: -2px;
`

const EditSubmitContainer = styled(SubmitContainer)`
  height: 26px;
  width: 32px;
  margin: 0;
  padding: 0;
  margin-left: 4px;
`

const EditSubmitButton = styled(SubmitButton)`
  font-size: 10px;
  padding: 0px 8px;
`

export default EditableLabel