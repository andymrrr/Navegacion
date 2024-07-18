import React, { useEffect } from 'react'
import {  Pressable, Text, View } from 'react-native'
import { EstiloGlobales } from '../../theme/Temas'
import { useNavigation, NavigationProp, DrawerActions } from '@react-navigation/native';
import { BotonPrimario } from '../../Componentes/Boton-Primario'
import type { RootStackParametro } from '../../routes/Stack-Navegacion'


export const InicioPantalla = () => {
 const navegacion = useNavigation<NavigationProp<RootStackParametro>>()
 useEffect(() => {
   navegacion.setOptions({
    headerLeft: () => (
      <Pressable onPress={() => navegacion.dispatch(DrawerActions.toggleDrawer)}>
        <Text>Menu</Text>
      </Pressable>
    )
   })
 }, [])
 
  return (
    <View style={EstiloGlobales.contenedor}>
      <BotonPrimario
        onPress={() => navegacion.navigate('Productos')}
        label="Prouctos"
      />
      <BotonPrimario
        onPress={() => navegacion.navigate('Ajustes')}
        label="Ajustes"
      />
    </View>
  );
}
