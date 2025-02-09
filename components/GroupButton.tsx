import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../redux/actions/cartActions";
import { AppDispatch } from "../redux/store";

interface Props {
  itemId: string;
  quantity: number;
}

const GroupButton: React.FC<Props> = ({ itemId, quantity }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateCartQuantity(itemId, quantity + 1));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateCartQuantity(itemId, quantity - 1));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button} disabled={quantity === 1}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{quantity}</Text>
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
