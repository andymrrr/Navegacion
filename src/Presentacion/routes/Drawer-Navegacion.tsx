import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavegacion } from './Stack-Navegacion';
import { PerfilPantalla } from '../Pantallas/Perfil/Perfil-Pantalla';
import { ColoresGlobales } from '../theme/Temas';
import { DrawerPersonalizao } from '../Componentes/Drawer/Drawer-Personalizao';
import { useWindowDimensions } from 'react-native';
import { BotonTabsNavegacion } from './Boton-Tabs-Navegacion';
import { Icono } from '../Componentes/Icono';

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
        drawerActiveTintColor:ColoresGlobales.fondo,
        drawerInactiveTintColor: ColoresGlobales.primario,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavegacion" component={StackNavegacion} /> */}
      <Drawer.Screen 
        options={{
          drawerIcon: ({color,focused,size}) => (<Icono nombre='bowling-ball-outline' color={color}/>)
        }}
        name="Tabs" component={BotonTabsNavegacion} />
      <Drawer.Screen 
         options={{
          drawerIcon: ({color,focused,size}) => (<Icono nombre='american-football-outline' color={color}/>)
        }}
      name="Perfil" component={PerfilPantalla} />
    </Drawer.Navigator>
  );
}