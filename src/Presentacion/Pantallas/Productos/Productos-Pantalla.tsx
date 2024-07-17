import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { EstiloGlobales } from '../../theme/Temas';
import { BotonPrimario } from '../../Componentes/Boton-Primario';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParametro } from '../../routes/Stack-Navegacion';
const productos = [
  {id: 1, nombre: 'Proucto 1'},
  {id: 2, nombre: 'Proucto 2'},
  {id: 3, nombre: 'Proucto 3'},
  {id: 4, nombre: 'Proucto 4'},
  {id: 5, nombre: 'Proucto 5'},
];
export const ProductosPantalla = () => {
  const navegacion = useNavigation<NavigationProp<RootStackParametro>>()
  return (
    <View style={EstiloGlobales.contenedor}>
      <Text style={{marginBottom:10, fontSize:30}}>Productos</Text>
      <FlatList
        data={productos}
        renderItem={({item}) => (
          <BotonPrimario onPress={() => navegacion.navigate("Producto",{id: item.id, nombre: item.nombre})} label={item.nombre} />
        )}
      />
      <Text style={{marginBottom:10, fontSize:30}}>Ajuste</Text>
      <BotonPrimario
        onPress={() => navegacion.navigate("Ajustes" as never)}
        label='Ajuste'
      />
    </View>
  );
}
