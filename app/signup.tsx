import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#814828"
        value={name}
        onChangeText={setName}
      />
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
        placeholder="Phone Number"
        placeholderTextColor="#814828"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#814828"
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
        onPress={() => router.push("/(tabs)")}
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
    backgroundColor: "#FFF5E1",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6A3A1F",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#F5E6CC",
    borderWidth: 1,
    borderColor: "#814828",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#814828",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "#814828",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF5E1",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#6A3A1F",
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: "#814828",
  },
  linkText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

