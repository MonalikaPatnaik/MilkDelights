import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productAction";
import ProductCard from "../components/ProductCard";
import Loader from "../constants/Loader";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export const ProductView = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, products = [] } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const uniqueProducts = Array.from(
    new Set(products.map((product) => product.id))
  ).map((id) => products.find((product) => product.id === id));

  if (loading) {
    return <Loader />;
  }

  const handleProductPress = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <View style={styles.container}>
      {uniqueProducts.length === 0 ? (
        <Text style={styles.emptyText}>No products available.</Text>
      ) : (
        <FlatList
          data={uniqueProducts}
          numColumns={2}
          key={`flatlist-2-columns`} // This forces a reset when necessary
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => handleProductPress(item.id)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF", // Soft milk blue background
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    color: "#1E3A5F",
    textAlign: "center",
    marginTop: 50,
    fontWeight: "500",
  },
});

export default ProductView;
