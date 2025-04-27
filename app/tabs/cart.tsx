import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "../../components/CartItem";
import EmptyCart from "../../components/EmptyCart";
import TotalView from "../../components/TotalView";
import { useNavigation } from "@react-navigation/native";

export default function CartTabScreen() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const navigation = useNavigation()

  const handlePlaceOrder = () => {
    console.log("Proceed to checkout with:", cartItems);
    navigation.navigate('Checkout', { cartItems }); 
  };

  return (
    <View style={styles.container}>

      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartItem item={item} />}
            contentContainerStyle={styles.listContent}
          />

          <TotalView items={cartItems} />

          <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF", // Soft blue theme
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#1E3A5F", // Darker blue for contrast
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  placeOrderButton: {
    backgroundColor: "#1E90FF", // Bright theme blue
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#1E3A5F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  placeOrderButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

