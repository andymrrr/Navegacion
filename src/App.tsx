
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { DrawerNavegacion } from './Presentacion/routes/Drawer-Navegacion';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavegacion/>
    </NavigationContainer>
  )
}
