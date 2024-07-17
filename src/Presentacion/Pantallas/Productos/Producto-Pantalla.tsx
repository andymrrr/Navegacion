import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParametro } from '../../routes/Stack-Navegacion';
import { EstiloGlobales } from '../../theme/Temas';

export const ProductoPantalla = () => {
  const parametros = useRoute<RouteProp<RootStackParametro,'Producto'>>().params;
  const navegacion = useNavigation()

  useEffect(() => {
   navegacion.setOptions({
    title: parametros.nombre
   })
  }, [])
  
  return (
    <View style ={EstiloGlobales.contenedor}>
      <Text>Producto Pantalla</Text>
      <Text style={{fontSize:20, marginTop:20, textAlign:"center"}}>
        {parametros.id } - {parametros.nombre}
      </Text>
    </View>
  );
}
