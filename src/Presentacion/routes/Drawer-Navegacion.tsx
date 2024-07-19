import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavegacion } from './Stack-Navegacion';
import { PerfilPantalla } from '../Pantallas/Perfil/Perfil-Pantalla';
import { ColoresGlobales } from '../theme/Temas';
import { DrawerPersonalizao } from '../Componentes/Drawer/Drawer-Personalizao';
import { useWindowDimensions } from 'react-native';
import { BotonTabsNavegacion } from './Boton-Tabs-Navegacion';

const Drawer = createDrawerNavigator();

export const DrawerNavegacion =() => {
  const dimension = useWindowDimensions();
  return (
    <Drawer.Navigator

      drawerContent={(props) => <DrawerPersonalizao {...props}/>}
      screenOptions={{
        drawerType: (dimension.width >= 768) ?"permanent" : "slide",
        headerShown:false,
        drawerActiveBackgroundColor: ColoresGlobales.primario,
        drawerActiveTintColor:ColoresGlobales.blanco,
        drawerInactiveTintColor: ColoresGlobales.primario,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavegacion" component={StackNavegacion} /> */}
      <Drawer.Screen name="BotonTabsNavegacion" component={BotonTabsNavegacion} />
      <Drawer.Screen name="Perfil" component={PerfilPantalla} />
    </Drawer.Navigator>
  );
}