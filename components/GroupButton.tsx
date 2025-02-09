import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GroupButton: React.FC = () => {
  const [counter, setCounter] = useState<number>(1);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button} disabled={counter === 1}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
