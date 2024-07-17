import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { EstiloGlobales } from '../theme/Temas'
interface Propiedad {
    label: string,
    onPress: () => void
}
export const BotonPrimario = ({label,onPress}:Propiedad) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={EstiloGlobales.botonPrimario}>
      <Text style={EstiloGlobales.botonTexto}>{label}</Text>
    </Pressable>
  );
}
