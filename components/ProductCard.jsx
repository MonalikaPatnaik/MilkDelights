// ProductCard.js

import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const ProductCard = ({ product }) => {
  // Access product properties and render the card details
  return (
    <Link href={`/product/${product.id}`} style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: product.url }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title.shortTitle}</Text>
          <Text style={styles.discount}>{product.discount}</Text>
          <Text style={styles.tagline}>{product.tagline}</Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    marginTop: 10,
    width: 250,
    border: "ridge",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    textAlign: "center",
    width: "100%",
  },
  image: {
    height: 200,
    objectFit: "contain",
    borderRadius: 20,
  },
  textContainer: {
    textAlign: "left",
  },
  title: {
    fontWeight: "600",
    color: "#212121",
  },
  discount: {
    color: "green",
  },
  tagline: {
    color: "#A1824A",
    opacity: 0.6,
  },
});

export default ProductCard;
