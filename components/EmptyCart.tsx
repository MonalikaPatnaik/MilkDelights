import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EmptyCart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" }}
        style={styles.image}
      />
      <Text style={styles.text}>Your cart is empty!</Text>
      <Text style={styles.subtext}>Add items to it now.</Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 250, height: 250, marginBottom: 10 },
  text: { fontSize: 18, fontWeight: "bold" },
  subtext: { fontSize: 14, color: "gray" },
});
