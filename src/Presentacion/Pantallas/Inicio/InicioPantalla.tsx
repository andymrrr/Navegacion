import React from 'react'
import {  View } from 'react-native'
import { EstiloGlobales } from '../../theme/Temas'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { BotonPrimario } from '../../Componentes/Boton-Primario'
import type { RootStackParametro } from '../../routes/Stack-Navegacion'

export const InicioPantalla = () => {
 const navegacion = useNavigation<NavigationProp<RootStackParametro>>()
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
