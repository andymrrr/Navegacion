import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../componente/navegacion/CustomTabBar'; // Asegúrate de que la ruta sea correcta
import PantallaInicio from '../pantallas/inicio/InicioPantalla';
import PantallaExplorar from '../pantallas/explorar/ExplorarPantalla';
import PantallaNotificaciones from '../pantallas/notificacion/NotificacionesPantalla';
import PantallaPerfil from '../pantallas/perfil/PerfilPantalla';

const Tab = createBottomTabNavigator();

const MenuNavegacion = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      // Aquí pasas las props que se espera que reciba el CustomTabBar
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Inicio" component={PantallaInicio} />
      <Tab.Screen name="Explorar" component={PantallaExplorar} />
      <Tab.Screen name="Notificaciones" component={PantallaNotificaciones} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
    </Tab.Navigator>
  );
};

export default MenuNavegacion;
