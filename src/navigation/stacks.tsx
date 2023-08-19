import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Movies, FavoriteMovies, Details } from '../scenes'
import { Routes } from '../utils/enums'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Public = createNativeStackNavigator()
// const Private = createMaterialTopTabNavigator()

// export const PrivateStack = (): JSX.Element => (
//   <Private.Navigator></Private.Navigator>
// )

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName={Routes.LOGIN}
    screenOptions={{
      statusBarStyle: 'light',
      headerShown: false,
      headerTitle: '',
      contentStyle: { backgroundColor: '#16171B' },
    }}
  >
    <Public.Screen name={Routes.LOGIN} component={Login} />
    <Public.Screen name={Routes.MOVIES} component={Movies} />
    <Public.Screen name={Routes.DETAILS} component={Details} />
    <Public.Screen name={Routes.FAVORITE_MOVIES} component={FavoriteMovies} />
  </Public.Navigator>
)
