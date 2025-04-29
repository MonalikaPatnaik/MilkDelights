import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Checkout() {
  const params = useLocalSearchParams();
  const cartItems = params.cartItems ? JSON.parse(params.cartItems) : [];

  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  const handlePlaceOrder = () => {
    // Basic validation
    if (!userDetails.fullName || !userDetails.email || !userDetails.phone || !userDetails.address) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Proceed with order placement logic
    console.log('User Details:', userDetails);
    console.log('Cart Items:', cartItems);
    Alert.alert('Success', 'Order placed successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* User Details Form */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={userDetails.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={userDetails.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={userDetails.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Shipping Address"
        multiline
        numberOfLines={4}
        value={userDetails.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      {/* Cart Items Summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.sectionTitle}>Order Summary:</Text>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Text key={index} style={styles.cartItem}>
              {item.title.shortTitle} - ₹{item.price.cost} x {item.quantity}
            </Text>
          ))
        ) : (
          <Text>No items in the cart.</Text>
        )}
      </View>

      {/* Place Order Button */}
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F8FF',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  cartSummary: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
