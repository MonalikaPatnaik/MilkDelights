import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image , Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import { Hidden } from '@mui/material';

export default function Welcome({ navigation }: { navigation: any }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image 
      source={require('../assets/images/logo.png')} // Replace with your image path
      style={styles.logo}
      resizeMode="contain"
    />
      <Text style={styles.title}>Welcome to MilkDelights</Text>
      <Text style={styles.subtitle}>
        Shop & get updates on new products, promotions, and sales with our mobile app.
      </Text>
      <Pressable 
        style={({ pressed }) => [
          styles.button, 
          pressed && styles.buttonPressed
        ]} 
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      {/* Sign Up Button */}
      <Pressable 
        style={({ pressed }) => [
          styles.button, 
          styles.signupButton, 
          pressed && styles.signupButtonPressed
        ]} 
        onPress={() => router.push('/signup')}
      >
        <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5E1',
    padding: 20,
  },
  logo: {
    width: 200,  // Adjust as needed
    height: 200, // Adjust as needed
    marginBottom: 20,
    borderRadius: 100,
    overflow: 'hidden',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6A3A1F'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#a25b36',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#814828',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: '#6A3A1F', // Darker shade when pressed
  },
  signupButton: {
    backgroundColor: '#FFF5E1',
    borderWidth: 1,
    borderColor: '#814828',
  },
  signupButtonText: {
    color: '#814828',
  },
  signupButtonPressed: {
    backgroundColor: '#F5E6CC', 
  },
});
