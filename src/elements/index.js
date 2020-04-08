// TODO: move all shared style vars to the theme vars

// BUILT-IN
export { default as ScrollView } from './built-in/ScrollView'
export { default as Text } from './built-in/Text'
export { default as TouchableHighlight } from './built-in/TouchableHighlight'
export { default as TouchableOpacity } from './built-in/TouchableOpacity'
export { default as View } from './built-in/View'
export { default as Image } from './built-in/Image'

//BUTTONS
export { default as SubmitButton } from './buttons/SubmitButton'
export { default as SuccessButton } from './buttons/SuccessButton'
export { default as DangerButton } from './buttons/DangerButton'
export { default as SimpleButton } from './buttons/SimpleButton'
export { default as CopyButton } from './buttons/CopyButton'

// FORMS
export { default as BaseForm } from './forms/BaseForm'
export { default as FormContainer } from './forms/FormContainer'
export { default as FormGroup } from './forms/FormGroup'
export { default as ValidationError } from './forms/ValidationError'

// CONTAINERS
export { default as BottomTranslateContainer } from './containers/BottomTranslateContainer'
export { default as PageContainer } from './containers/PageContainer'
export { default as ScreenContainer } from './containers/ScreenContainer'
export { default as ScrollContainer } from './containers/ScrollContainer'
export { default as KeyboardAvoidingContainer } from './containers/KeyboardAvoidingContainer'
// Containers for buttons at the bottom of the screen.
// Use at the same level with StickyScrollContainer.
export { default as StickyButtonContainer } from './containers/StickyButtonContainer'
export { default as StickyScrollContainer } from './containers/StickyScrollContainer'
export { default as SubmitContainer } from './containers/SubmitContainer'
export { default as ViewContainer } from './containers/ViewContainer'

//INPUTS
// Textfield with icon at the left
export { default as IconTextfield } from './inputs/IconTextfield'
// Text field with icon and X to clear values
export { default as SearchInput } from './inputs/SearchInput'
export { default as SimpleTextfield } from './inputs/SimpleTextfield'
// default text field with type attr [text|number|password]
export { default as Textfield } from './inputs/Textfield'
// Textfield with units at the right
export { default as UnitsTextfield } from './inputs/UnitsTextfield'
export { default as EditableLabel } from './inputs/EditableLabel'
export { default as Textarea } from './inputs/Textarea'

//LISTS
// Textfield with icon at the left
export { default as Ul } from './lists/Ul'
export { default as Li } from './lists/Li'

//MENUS
export { default as ListMenu } from './menus/list-menu/ListMenu'
export { default as ListMenuItem } from './menus/list-menu/ListMenuItem'

// PROGRESS
export { default as Loading } from './progress/Loading'

// TABLES
export { default as DefaultTable } from './tables/DefaultTable'
export { default as TableSeparator } from './tables/TableSeparator'
export { default as ListTable } from './tables/ListTable/Table'
export { default as ListTableRow } from './tables/ListTable/Row'
export { default as ListTableCell } from './tables/ListTable/Cell'

// TABS
export { default as MaterialTabButtons } from './tabs/MaterialTabButtons'
export { default as MaterialTabButton } from './tabs/MaterialTabButton'

// TOGGLES
export { default as Checkbox } from './toggles/Checkbox'
// you should wrap Radio in RadioGroup
export { default as Radio } from './toggles/Radio'
export { default as RadioGroup } from './toggles/RadioGroup'
export { default as Switch } from './toggles/Switch'

// TYPO
export { default as A } from './typo/A'
export { default as AlertLabel } from './typo/AlertLabel'
export { default as GreenLabel } from './typo/GreenLabel'
export { default as P } from './typo/P'
export { default as RedLabel } from './typo/RedLabel'
export { default as SectionHeader } from './typo/SectionHeader'
export { default as WarningLabel } from './typo/WarningLabel'
export { default as Roboto } from './typo/Roboto'
export * from './typo/Roboto'

