import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productAction';
import ProductCard from '../components/ProductCard';
import Loader from '../constants/Loader';
import { View, Text, FlatList } from 'react-native';

export const ProductView = () => {
  const dispatch = useDispatch();

  // Use the correct slice name in the useSelector
  const { loading, products = [] } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Define uniqueProducts
  const uniqueProducts = Array.from(new Set(products.map(product => product.id)))
    .map(id => products.find(product => product.id === id));

    if (loading) {
      return <Loader />;
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      { uniqueProducts.length === 0 ? (
        <Text>No products available.</Text>
      ) : (
        <FlatList
          data={uniqueProducts}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          style={{ width: '100%' }}
        />
      )}
    </View>
  );
};

export default ProductView;
