import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabUnoPantalla } from '../Pantallas/Tab/Tab-Uno-Pantalla';
import { TabDosPantalla } from '../Pantallas/Tab/Tab-Dos-Pantalla';
import { TabTresPantalla } from '../Pantallas/Tab/Tab-Tres-Pantalla';
import { ColoresGlobales } from '../theme/Temas';

const Tab = createBottomTabNavigator();

export const BotonTabsNavegacion =()=> {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: ColoresGlobales.blanco
      }}
    >
      <Tab.Screen name="TabUnoPantalla" component={TabUnoPantalla} />
      <Tab.Screen name="TabDosPantalla" component={TabDosPantalla} />
      <Tab.Screen name="TabTresPantalla" component={TabTresPantalla} />
    </Tab.Navigator>
  );
}