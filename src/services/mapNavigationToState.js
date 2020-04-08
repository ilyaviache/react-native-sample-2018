export const mapNavigatioToState = (nav, params) => ({
  nav,
  currentRoute: nav.routes[nav.index],
  ...params
})
