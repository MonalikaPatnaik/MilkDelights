import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase"

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      Alert.alert("Success", "User registered! Check your email for verification.");
      // router.push("/login"); // Redirect to login page
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#4979C0"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#4979C0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#4979C0"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#4979C0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      {/* Sign In Link */}
      <Text style={styles.link} onPress={() => router.push("/login")}>
        Already have an account? <Text style={styles.linkText}>Sign in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF", // Light milky blue
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A5F", // Deep blue for contrast
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF", // White input for clean look
    borderWidth: 1,
    borderColor: "#1E90FF", // Blue border
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#1E3A5F", 
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "#1E90FF", 
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#0073E6", 
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "#1E3A5F",
  },
  linkText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#1E90FF",
  },
});
