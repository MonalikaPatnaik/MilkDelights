import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome({ navigation }: { navigation: any }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} // Make sure the path is correct
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to MilkDelights</Text>
      <Text style={styles.subtitle}>
        Fresh dairy products delivered to your door. Stay updated with new products, offers, and more!
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
    backgroundColor: '#F0F8FF', // Soft Milk Blue
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1E3A5F', // Darker Blue
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4979C0', // Softer blue for readability
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#1E90FF', // Fresh Blue for buttons
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: '#0073E6', // Slightly darker on press
  },
  signupButton: {
    backgroundColor: '#ffffff', // Clean white button for sign up
    borderWidth: 1,
    borderColor: '#1E90FF', 
  },
  signupButtonText: {
    color: '#1E90FF',
  },
  signupButtonPressed: {
    backgroundColor: '#E6F1FF', // Very light blue when pressed
  },
});
