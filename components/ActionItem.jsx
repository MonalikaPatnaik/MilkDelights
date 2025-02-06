import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { getProductDetails } from "../redux/actions/productAction";
import { auth } from "../firebase";
import { Icon } from "react-native-elements"; // Assuming you want to use icons

const ActionItem = ({ product }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    if (auth.currentUser) {
      navigate.navigate("Cart");
    } else {
      navigate.navigate("Signin");
    }
  };

  const buyNow = () => {
    dispatch(getProductDetails(id));
    if (auth.currentUser) {
      navigate.navigate("Checkout", { state: { product } });
    } else {
      navigate.navigate("Signin");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.detailUrl }} style={styles.image} />
      <TouchableOpacity
        onPress={addItemToCart}
        style={[styles.button, { backgroundColor: "#ff9f00" }]}
      >
        <Icon name="shopping-cart" type="font-awesome" color="white" />
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={buyNow}
        style={[styles.button, { backgroundColor: "#fb541b" }]}
      >
        <Icon name="flash-on" type="font-awesome" color="white" />
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 15,
  },
  button: {
    width: '45%',
    height: 50,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default ActionItem;