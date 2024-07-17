import { createStackNavigator } from '@react-navigation/stack';
import { InicioPantalla } from '../Pantallas/Inicio/InicioPantalla';
import { ProductosPantalla } from '../Pantallas/Productos/Productos-Pantalla';
import { AjustesPantalla } from '../Pantallas/Ajustes/Ajustes-Pantalla';
import { ProductoPantalla } from '../Pantallas/Productos/Producto-Pantalla';



export type RootStackParametro = {
  Inicio: undefined,
  Productos: undefined,
  Producto: {id: number,nombre: string},
  Ajustes: undefined
}
const Stack = createStackNavigator<RootStackParametro>();
export const StackNavegacion = ()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Inicio" component={InicioPantalla} />
      <Stack.Screen name="Productos" component={ProductosPantalla} />
      <Stack.Screen name="Producto" component={ProductoPantalla} />
      <Stack.Screen name="Ajustes" component={AjustesPantalla} />
    </Stack.Navigator>
  );
}