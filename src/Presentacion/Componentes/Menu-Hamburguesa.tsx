import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { Icono } from './Icono';
import { ColoresGlobales } from '../theme/Temas';

export const MenuHamburguesa = () => {
    const navegacion = useNavigation()
    
   useEffect(() => {
     navegacion.setOptions({
       headerLeft: () => (
         <Pressable
            style={{marginLeft:5}}
           onPress={() => navegacion.dispatch(DrawerActions.toggleDrawer)}>
            <Icono nombre='menu-outline' tamano={30} color={ColoresGlobales.primario}  />
         </Pressable>
       ),
     });
   }, []);

   return (<></>)
}
