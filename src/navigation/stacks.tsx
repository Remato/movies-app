import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Movies, FavoriteMovies } from '../scenes'
import { Routes } from '../utils/enums'

const Public = createNativeStackNavigator()
const Private = createMaterialTopTabNavigator()

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator>
    <Private.Screen name={Routes.MOVIES} component={Movies} />
    <Private.Screen name={Routes.FAVORITE_MOVIES} component={FavoriteMovies} />
  </Private.Navigator>
)

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
  </Public.Navigator>
)
