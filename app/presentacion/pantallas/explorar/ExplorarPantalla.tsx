import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PantallaExplorar = () => (
  <View style={styles.screen}>
    <Text>Pantalla de Explorar</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PantallaExplorar;
