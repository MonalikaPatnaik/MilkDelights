import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Ionicons } from "@expo/vector-icons";
import Banner from "../../components/Banner";
import { Link } from 'expo-router';
import { useRouter } from "expo-router";


const Home = () => {
  const router = useRouter();

const handleProductClick = (productId: string) => {
  router.push(`/product/${productId}`);
};
  const { loading, products } = useSelector(
    (state: RootState) => state.getProducts || {}
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );
  }

  const renderProductCard = ({ item}) => (
    <TouchableOpacity
    style={styles.productCard}
    onPress={() => handleProductClick(item.id)}
  >
      <Image
        source={{ uri: item?.url || "https://via.placeholder.com/100" }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title?.shortTitle}
        </Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color="#E53935" />
        </TouchableOpacity>
      </View>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>₹{item.price?.mrp || item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          {/* Header Section */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.userIcon}>
              <Image
                source={{ uri: "https://your-avatar-url.com" }}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={18} color="#1E90FF" />
              <Text style={styles.locationText}>Delhi, India</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} color="#1E3A5F" />
            </TouchableOpacity>
          </View>

          {/* Banner Section */}
          <View style={styles.bannerWrapper}>
            <Banner />
          </View>

          {/* Categories Section */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Link href={'/productView'} style={styles.viewAll}>View All</Link>
          </View>
          <Text style={styles.subText}>Milk, Bread, Ghee, Butter, and more</Text>
        </>
      }
      data={products}
      renderItem={renderProductCard}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={{ paddingBottom: 16 }}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0F8FF", // Soft milky blue
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  userIcon: {
    borderRadius: 20,
    overflow: "hidden",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#1E3A5F",
  },
  bannerWrapper: {
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 12,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A5F",
    textAlign: "center",
    marginTop: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A5F",
  },
  viewAll: {
    fontSize: 14,
    color: "#1E90FF",
    fontWeight: "600",
  },
  subText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    margin: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 6,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A5F",
    flexShrink: 1,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 6,
  },
  productPrice: {
    fontSize: 14,
    color: "#388E3C",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});

export default Home;
