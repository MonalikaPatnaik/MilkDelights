import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; // ✅ Import Redux Store
import CartItem from "../../components/CartItem";
import EmptyCart from "../../components/EmptyCart";
import TotalView from "../../components/TotalView";

export default function CartTabScreen() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handlePlaceOrder = () => {
    console.log("Proceed to checkout with:", cartItems);
    // Implement navigation logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
          <TotalView items={cartItems} />
          <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  button: { backgroundColor: "#fb641b", padding: 15, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
