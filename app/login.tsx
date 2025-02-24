import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      if (!userCredential.user.emailVerified) {
        Alert.alert("Error", "Please verify your email before logging in.");
        return;
      }
  
      Alert.alert("Success", "Logged in successfully!");
      router.push("/(tabs)"); 
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#814828"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#814828"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign In Button */}
      <Pressable 
        style={({ pressed }) => [
          styles.button, 
          pressed && styles.buttonPressed
        ]} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      {/* Sign Up Link */}
      <Text style={styles.link} onPress={() => router.push('/signup')}>
        Don't have an account? <Text style={styles.linkText}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5E1',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6A3A1F',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a25b36',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F5E6CC',
    borderWidth: 1,
    borderColor: '#814828',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#814828',
    marginBottom: 12,
  },
  button: {
    width: '100%',
    backgroundColor: '#814828',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF5E1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonPressed: {
    backgroundColor: '#6A3A1F',
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: '#814828',
  },
  linkText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
