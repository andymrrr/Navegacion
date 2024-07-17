
import React from 'react'
import { Text, View } from 'react-native'
import { EstiloGlobales } from '../../theme/Temas'
import { BotonPrimario } from '../../Componentes/Boton-Primario'
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native'
import { RootStackParametro } from '../../routes/Stack-Navegacion'

export const AjustesPantalla = () => {

  const navegador = useNavigation<NavigationProp<RootStackParametro,"Ajustes">>()
  return (
    <View style={EstiloGlobales.contenedor}>
        <Text style={{marginBottom:10}}>AJUSTE</Text>

        <BotonPrimario 
          label='Regresar'
          onPress={()=> navegador.goBack()}
        />
        <BotonPrimario 
          label='Regresar al Inicio'
          onPress={()=> navegador.dispatch(StackActions.popToTop)}
        />
    </View>
  )
}
