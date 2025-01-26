import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoaderImg from '../assets/images/loader.svg';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  }
});

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={LoaderImg}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default Loader;
