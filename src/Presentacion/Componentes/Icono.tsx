import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ColoresGlobales } from '../theme/Temas';

interface Propiedad {
    nombre: string;
    color?: string;
    tamano?:number;
}
export const Icono = ({nombre,tamano = 35,color=ColoresGlobales.oscuro}:Propiedad) => {
  return (
    <Icon name={nombre}size={tamano} color={color}></Icon>
  )
}
