import React, { useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Ionicons } from "@expo/vector-icons";
import Banner from "../../components/Banner";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { RootState } from "../../redux/store"; // Make sure you import your RootState type

const Home = () => {
  const router = useRouter();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const { loading, products } = useSelector(
    (state: RootState) => state.getProducts || {}
  );

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const renderProductCard = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductClick(item.id)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item?.url || "https://via.placeholder.com/150" }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productTitle} numberOfLines={2}>
        {item.title?.shortTitle}
      </Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>
          ₹{item.price?.mrp || item.price}
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  if (loading && (!products || products.length === 0)) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.bannerWrapper}>
              <Banner />
            </View>

            <View style={styles.categoriesContainer}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <Link href={"/productView"} style={styles.viewAll}>
                View All
              </Link>
            </View>
            <Text style={styles.subText}>
              Milk, Bread, Ghee, Butter, and more
            </Text>
          </>
        }
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item, index) =>
          item.id ? `${item.id}-${index}` : `item-${index}`
        }
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        bounces
        style={styles.background}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    elevation: 3,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  background: {
    backgroundColor: "#FAFAFA",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  bannerWrapper: {
    paddingHorizontal: 12,
    marginTop: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A5F",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E90FF",
  },
  subText: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#388E3C",
  },
  addButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 8,
  },
});

export default Home;
