import { createSelector } from 'reselect'


export const getNavigation = (state) => state.navigation

export const getCurrentRoute = createSelector(
  [ getNavigation ],
  (navigation) => (
    {
      navigationState: navigation,
      currentRoute: navigation.routes[navigation.index]
    }
  )
)
