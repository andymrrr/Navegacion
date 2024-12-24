import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const JugarButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.jugarButton}>
      <Text style={styles.jugarButtonText}>¡Jugar!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  jugarButton: {
    position: "absolute",
    bottom: 30,
    left: Dimensions.get("window").width / 2 - 60,
    width: 120,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0070F3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  jugarButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default JugarButton;
