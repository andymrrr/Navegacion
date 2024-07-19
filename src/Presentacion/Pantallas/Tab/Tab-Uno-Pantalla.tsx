import React from 'react'
import {  View } from 'react-native'
import { MenuHamburguesa } from '../../Componentes/Menu-Hamburguesa';
import { Icono } from '../../Componentes/Icono';

export const TabUnoPantalla = () => {
  
  return (
    <View>
      <MenuHamburguesa/>
      <Icono nombre='rocket-outline' tamano={300} color='#900' />
    </View>
  )
}
