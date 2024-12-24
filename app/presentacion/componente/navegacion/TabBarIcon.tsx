import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
  size: number;
  color: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, focused, size, color }) => {
  let iconName: string;

  switch (routeName) {
    case "Inicio":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Explorar":
      iconName = focused ? "search" : "search-outline";
      break;
    case "Notificaciones":
      iconName = focused ? "notifications" : "notifications-outline";
      break;
    case "Perfil":
      iconName = focused ? "person" : "person-outline";
      break;
    default:
      iconName = "help-circle-outline";
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
