import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart, Product } from "../redux/actions/cartActions";
import { AppDispatch } from "../redux/store";
import GroupButton from "./GroupButton";

interface Props {
  item: Product;
  onRemove: () => void; 
}

const CartItem: React.FC<Props> = ({ item, onRemove }) => {
  const dispatch: AppDispatch = useDispatch();

  const quantity = item.quantity ?? 1;  

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>
          {typeof item.title === "string" ? item.title : item.title?.shortTitle}
        </Text>
        <Text style={styles.price}>
          ₹{item.price.cost * quantity} (MRP: ₹{item.price.mrp * quantity})
        </Text>

        <GroupButton itemId={item.id} quantity={quantity} />
        <TouchableOpacity onPress={onRemove} style={styles.removeBtn}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 10 },
  image: { width: 80, height: 80, marginRight: 10 },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "#388E3C", marginVertical: 5 },
  removeBtn: { marginTop: 10 },
  removeText: { color: "red", fontSize: 14, fontWeight: "bold" },
});
