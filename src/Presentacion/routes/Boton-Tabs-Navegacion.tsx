import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabUnoPantalla } from '../Pantallas/Tab/Tab-Uno-Pantalla';
import { ColoresGlobales } from '../theme/Temas';
import { Text } from 'react-native';
import { TopTabsNavegacion } from './Top-Taps-Navegacion';
import { StackNavegacion } from './Stack-Navegacion';
import { Icono } from '../Componentes/Icono';

const Tab = createBottomTabNavigator();

export const BotonTabsNavegacion =()=> {
  return (
    <Tab.Navigator
      
      sceneContainerStyle={{
        backgroundColor: ColoresGlobales.fondo
      }}
      screenOptions={{
        tabBarActiveTintColor: ColoresGlobales.primario,
        tabBarLabelStyle:{
          marginBottom:5
        },
        headerStyle:{
          elevation:0,
          borderColor: ColoresGlobales.transparente,
          shadowColor: ColoresGlobales.transparente
        },
        tabBarStyle:{
          borderTopWidth:0,
          elevation:0
        }
      }}
    >
      <Tab.Screen name="TabUno" options={{
        title:"Tab 1",
        tabBarIcon:({color,focused,size}) =>(
          <Icono nombre='accessibility-outline' color={color}/>
        ),
      }} component={TabUnoPantalla} />

      <Tab.Screen name="TabDos" options={{
        title:"Tab 2",
        tabBarIcon:({color,focused,size}) =>(
          <Icono nombre='airplane-outline' color={color} />
        ),
      }} component={TopTabsNavegacion} />

      <Tab.Screen name="TabTres" options={{
        title:"Tab 3",
        tabBarIcon:({color,focused,size}) =>(
          <Icono nombre='bar-chart-outline' color={color}/>
        ),
      }} component={StackNavegacion} />
    </Tab.Navigator>
  );
}