import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { getProductDetails } from "../redux/actions/productAction";
import { auth } from "../firebase";
import { Icon } from "react-native-elements";

const ActionItem = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    Alert.alert(
      'Success',
      'Item added to cart successfully!',
      [
        {
          text: 'View Cart',
          onPress: () => router.push('/tabs/cart'),
          style: 'default',
        },
        {
          text: 'Continue Shopping',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const buyNow = () => {
    if (auth.currentUser) {
      const productWithQuantity = {
        ...product,
        quantity: 1,
      };
      router.push({
        pathname: '/checkout',
        params: { cartItems: JSON.stringify([productWithQuantity]) }
      });
    } else {
      router.push('/login');
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: product.detailUrl }} style={styles.image} />

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={addItemToCart}
          style={[styles.button, styles.addToCartButton]}
        >
          <Icon name="shopping-cart" type="font-awesome" color="#ffffff" size={18} />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buyNow}
          style={[styles.button, styles.buyNowButton]}
        >
          <Icon name="bolt" type="font-awesome" color="#ffffff" size={18} />
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#1E3A5F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#FFF', // soft blue background for product image
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: '#1E90FF', // Themed blue
  },
  buyNowButton: {
    backgroundColor: '#0073E6', // Slightly darker blue for contrast
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 6,
  },
});

export default ActionItem;