import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: product.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{product.title.shortTitle}</Text>
        <Text style={styles.discount}>{product.discount}</Text>
        <Text style={styles.tagline} numberOfLines={1}>{product.tagline}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%', // Makes 2 products fit in a row
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
    marginBottom: 12,
    shadowColor: '#1E3A5F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#FFF', // Light background for image
  },
  textContainer: {
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E3A5F",
  },
  discount: {
    color: "green",
    fontSize: 12,
    marginTop: 4,
  },
  tagline: {
    fontSize: 12,
    color: "#A1824A",
    opacity: 0.7,
    marginTop: 2,
  },
});

export default ProductCard;
