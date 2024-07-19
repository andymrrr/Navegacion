import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PerfilPantalla } from '../Pantallas/Perfil/Perfil-Pantalla';
import { AcercaPantalla } from '../Pantallas/Acerca/Acerca-Pantalla';
import { MenuHamburguesa } from '../Componentes/Menu-Hamburguesa';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavegacion = ()=> {
  return (
    <>
      <MenuHamburguesa />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={PerfilPantalla} />
        <Tab.Screen name="Acerca" component={AcercaPantalla} />
      </Tab.Navigator>
    </>
  );
}