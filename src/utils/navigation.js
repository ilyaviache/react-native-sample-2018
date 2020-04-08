import React from 'react'

import { t } from '../locales/i18n'

import HeaderMenuIcon from '../modules/navigation/header/components/HeaderMenuIcon'

export const getNavigationHeader = ({ navigation, screenProps }) => (
  {
    headerMode: 'float',
    title: t('route.' + navigation.state.routeName),
    headerTintColor: screenProps.theme.colors.headerContrastColor,
    headerStyle: {
      backgroundColor: screenProps.theme.colors.background,
      borderBottomColor: 'transparent',
    },
    headerRight: <HeaderMenuIcon navigation={navigation} />,
    // TODO: header title for all the pages
    headerBackTitle: null
  }
)

export const getHomeHeader = ({ navigation, screenProps }) => (
  {
    headerTintColor: screenProps.theme.colors.headerContrastColor,
    headerStyle: {
      backgroundColor: screenProps.theme.colors.background,
      borderBottomColor: 'transparent',
    },
    headerRight: <HeaderMenuIcon navigation={navigation} />
  }
)
