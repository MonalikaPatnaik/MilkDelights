import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalSearchParams } from 'expo-router';
import { getProductDetails } from '../../redux/actions/productAction';
import { View, ScrollView, StyleSheet } from 'react-native';
import ActionItem from '../../components/ActionItem';
import ProductDetail from '../../components/ProductDetail';
import Loader from '../../constants/Loader';

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      {product && Object.keys(product).length > 0 && (
        <View style={styles.innerContainer}>
          {/* Action Buttons (Buy Now / Add to Cart) */}
          <View style={styles.actionItemContainer}>
            <ActionItem product={product} />
          </View>

          {/* Product Details */}
          <View style={styles.productDetailContainer}>
            <ProductDetail product={product} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Soft milk blue (theme background)
  },
  innerContainer: {
    padding: 12,
  },
  actionItemContainer: {
    backgroundColor: '#FFFFFF', // Clean white card
    borderRadius: 12,
    padding: 0,
    shadowColor: '#1E3A5F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  productDetailContainer: {
    backgroundColor: '#FFFFFF', // Clean white card
    borderRadius: 12,
    padding: 0,
    shadowColor: '#1E3A5F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
});

export default DetailView;
