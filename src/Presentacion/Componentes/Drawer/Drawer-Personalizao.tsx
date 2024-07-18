import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import { ColoresGlobales } from '../../theme/Temas'

export const DrawerPersonalizao = (propiedad: DrawerContentComponentProps) => {
  return (
   <DrawerContentScrollView>
    <View
        style={{
            height:200,
            backgroundColor:ColoresGlobales.primario,
            margin:30,
            borderRadius:50

        }}
    />
    <DrawerItemList {...propiedad}/>
   
   </DrawerContentScrollView>
  )
}
