import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { removeFromCart } from "../redux/actions/cartActions";

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems); // ✅ Get cart items from Redux
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();

  const handlePlaceOrder = () => {
    navigation.navigate("Checkout" as never, { cartItems } as never);
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <Text style={styles.header}>My Cart ({cartItems.length})</Text>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem item={item} onRemove={() => dispatch(removeFromCart(item.id))} />
            )}
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
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  button: { backgroundColor: "#fb641b", padding: 15, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
