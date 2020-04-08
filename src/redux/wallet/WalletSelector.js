import { createSelector } from 'reselect'

const state = state => state

export const selectSeed = createSelector(
  state,
  state => state.seed
)

export const selectKey = createSelector(
  state,
  state => state.key
)

export const selectError = createSelector(
  state,
  state => state.error
)

export const selectPasswordSet = createSelector(
  state,
  state => state.passwordSet
)