import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavegacion } from './Stack-Navegacion';
import { PerfilPantalla } from '../Pantallas/Perfil/Perfil-Pantalla';

const Drawer = createDrawerNavigator();

export const DrawerNavegacion =() => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavegacion" component={StackNavegacion} />
      <Drawer.Screen name="Perfil" component={PerfilPantalla} />
    </Drawer.Navigator>
  );
}