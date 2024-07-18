import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BotonPrimario } from '../../Componentes/Boton-Primario'

export const PerfilPantalla = () => {
  const {top} = useSafeAreaInsets()
  const navegacion = useNavigation();
  return (
    <View>
        <Text style={{flex:1, paddingHorizontal: 20, marginTop: top + 20}}>
          PerfilPantalla
        </Text>

        <BotonPrimario
          label='Abrir Menu'
          onPress={ ()=> navegacion.dispatch(DrawerActions.toggleDrawer)}
        />
    </View>
  )
}
