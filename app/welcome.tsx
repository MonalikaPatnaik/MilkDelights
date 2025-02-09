import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome({ navigation }: { navigation: any }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MD</Text>
      <Text style={styles.title}>Welcome to MilkDelights</Text>
      <Text style={styles.subtitle}>
        Shop & get updates on new products, promotions, and sales with our mobile app.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => router.push('/signup')}>
        <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
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
  signupButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  signupButtonText: {
    color: '#000',
  },
});
