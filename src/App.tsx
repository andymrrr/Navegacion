
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavegacion } from './Presentacion/routes/Stack-Navegacion';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavegacion/>
    </NavigationContainer>
  )
}
