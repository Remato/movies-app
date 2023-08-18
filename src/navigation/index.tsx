import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { PrivateStack, PublicStack } from './stacks'
import { STACKS } from '../utils/enums'

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={STACKS.PUBLIC}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name={STACKS.PUBLIC} component={PublicStack} />
        <MainStack.Screen name={STACKS.PRIVATE} component={PrivateStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App
