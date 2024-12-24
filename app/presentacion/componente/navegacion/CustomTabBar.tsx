import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <Svg
        width={Dimensions.get('window').width}
        height={80}
        viewBox="0 0 1440 80"
        style={styles.svgCurve}
      >
        {/* Invertimos el arco para que esté en la parte superior */}
        <Path
          fill="#1f1f1f"
          d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
        />
      </Svg>
      <View style={styles.tabItemsContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = isFocused ? 'home' : 'home-outline';
              break;
            case 'Explorar':
              iconName = isFocused ? 'search' : 'search-outline';
              break;
            case 'Notificaciones':
              iconName = isFocused ? 'notifications' : 'notifications-outline';
              break;
            case 'Perfil':
              iconName = isFocused ? 'person' : 'person-outline';
              break;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              <Icon name={iconName!} size={24} color={isFocused ? '#0070F3' : 'gray'} />
              <Text style={{ color: isFocused ? '#0070F3' : 'gray', fontSize: 12 }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.jugarButton}>
        <Icon name="game-controller" size={24} color="white" />
        <Text style={styles.jugarButtonText}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,  // Aumentar la altura para dar espacio al arco
    alignItems: 'center',
  },
  svgCurve: {
    position: 'absolute',
    top: 0,
  },
  tabItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 20, // Ajustar para que las opciones se ubiquen encima del arco
  },
  tabItem: {
    alignItems: 'center',
  },
  jugarButton: {
    position: 'absolute',
    bottom: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0070F3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  jugarButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
