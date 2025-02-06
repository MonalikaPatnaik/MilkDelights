import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalSearchParams } from 'expo-router';
import { getProductDetails } from '../../redux/actions/productAction';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ActionItem from '../../components/ActionItem';
import ProductDetail from '../../components/ProductDetail';
import Loader from '../../constants/Loader';

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();

  // Use the correct slice name in the useSelector
  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, id, product]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      {product && Object.keys(product).length &&
        <View style={styles.container}>
          <View style={styles.actionItemContainer}>
            <ActionItem product={product} />
          </View>
          <View style={styles.productDetailContainer}>
            <ProductDetail product={product} />
          </View>
        </View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  actionItemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
  },
  productDetailContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    marginTop: 155,
  },
});

export default DetailView;
