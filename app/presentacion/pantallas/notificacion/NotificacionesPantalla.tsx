import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PantallaNotificaciones = () => (
  <View style={styles.screen}>
    <Text>Pantalla de Notificaciones</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PantallaNotificaciones;
