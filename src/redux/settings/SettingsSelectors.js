import { createSelector } from 'reselect'

const themeValue = state => state.theme

export const getThemeValue = createSelector(
  themeValue, 
  s => s
)
