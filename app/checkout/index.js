import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import RazorpayCheckout from 'react-native-razorpay';

export default function Checkout() {
  const router = useRouter();
  const { user } = useAuth();
  const params = useLocalSearchParams();
  const cartItems = params.cartItems ? JSON.parse(params.cartItems) : [];

  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price.cost * (item.quantity || 1));
    }, 0);
  };

  const handleInputChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  const handlePlaceOrder = async () => {
    // Basic validation
    if (!userDetails.fullName || !userDetails.email || !userDetails.phone || !userDetails.address) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const totalAmount = calculateTotal();

    try {
      const options = {
        key: 'rzp_test_N8MLCvpxuLueYZ',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'Milk Delights',
        description: 'Payment for your order',
        prefill: {
          name: userDetails.fullName,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: { color: '#1E90FF' },
        // handler: function(response) {
        //   Alert.alert('Success', 'Payment successful! Your order has been placed.');
        //   router.replace('/tabs/home');
        // }
      };

      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error}`);
      });
    } catch (error) {
      console.error('Payment Error:', error);
      Alert.alert('Error', 'Payment failed. Please try again.');
    }
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
          <>
            {cartItems.map((item, index) => (
              <Text key={index} style={styles.cartItem}>
                {item.title.shortTitle} - ₹{item.price.cost} x {item.quantity || 1}
              </Text>
            ))}
            <Text style={styles.totalAmount}>
              Total Amount: ₹{calculateTotal()}
            </Text>
          </>
        ) : (
          <Text>No items in the cart.</Text>
        )}
      </View>

      {/* Place Order Button */}
      <Button 
        title="Proceed to Payment" 
        onPress={handlePlaceOrder}
        color="#1E90FF"
      />
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
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1E3A5F',
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    color: '#1E3A5F',
  },
});
