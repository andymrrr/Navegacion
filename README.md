### Proyecto de Menú de Navegación - PS Network (APP)

Este es un proyecto de navegación personalizada para una aplicación móvil utilizando React Native con Expo SDK 52. El menú simula un estilo de navegación similar al de PS Network, con un sistema de pestañas (TabBar) y un botón central destacado para realizar acciones, como "Jugar".

### Descripción

El proyecto implementa un menú de navegación con varias pantallas principales: Inicio, Explorar, Notificaciones y Perfil. La barra de navegación personalizada incluye un diseño con un arco en la parte inferior, un diseño atractivo, y un botón flotante de acción (Jugar) en el centro. Cada pestaña está asociada a un icono y un nombre de sección.

### Funcionalidades principales:

1. Navegación por pestañas (Inicio, Explorar, Notificaciones, Perfil).
2. Diseño de barra de navegación personalizada con un SVG para el arco en la parte inferior.
3. Botón de acción central (Jugar) que sobresale del resto de las pestañas.
4. Estilos personalizados para la barra de navegación y las pestañas.

### Tecnologías utilizadas

1. **React Native:** Para la creación de la aplicación móvil.
2. **Expo SDK 52:** Para facilitar el desarrollo con herramientas como createBottomTabNavigator.
3. **react-native-vector-icons:** Para los iconos utilizados en las pestañas.
4. **react-native-svg:** Para el diseño del arco SVG en la parte inferior de la barra de navegación.
5. **React Navigation:** Para la gestión de la navegación en la aplicación.

### Instalación

Para ejecutar este proyecto en tu máquina local, sigue los pasos a continuación:

### Clonar el repositorio:

```bash
git clone https://github.com/tu_usuario/nombre_del_repositorio.git
```

Instalar dependencias: Asegúrate de tener Node.js instalado. Luego, instala las dependencias con:

```bash
npm install
```

Ejecutar el proyecto: Si no tienes Expo CLI, instálalo globalmente:

```bash
npm install -g expo-cli
```

Luego, para iniciar el proyecto:

```bash
expo start
```

Esto abrirá el proyecto en tu navegador y podrás escanear el código QR con la app de Expo Go.

### Estructura del proyecto

La estructura del proyecto es la siguiente:

1. **MenuNavegacion.tsx:** Componente principal que maneja la navegación por pestañas.
2. **CustomTabBar.js:** Componente personalizado que gestiona la apariencia y funcionalidad de la barra de navegación.
3. **Pantallas:** Cada una de las pantallas principales de la aplicación (Inicio, Explorar, Notificaciones, Perfil).
