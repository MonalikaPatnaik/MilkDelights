import React, { useState, useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { bannerData } from '../constants/data';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: Platform.select({
      web: Math.min(screenWidth * 0.4, 370),
      default: screenWidth * 0.5, // Adjusted for mobile - maintains aspect ratio better
    }),
    resizeMode: Platform.select({
      web: 'contain',
      default: 'cover' // Better mobile view like Flipkart
    })
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f6', // Flipkart-like background
  }
});

const Banner = () => {
  const [dimensions, setDimensions] = useState({ 
    window: Dimensions.get('window') 
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window });
    });

    return () => subscription?.remove();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: item.url }}
          style={[styles.image, {
            width: dimensions.window.width,
            height: Platform.select({
              web: Math.min(dimensions.window.width * 0.4, 370),
              default: dimensions.window.width * 0.5, // Responsive height based on screen width
            }),
          }]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={bannerData}
        renderItem={renderItem}
        sliderWidth={dimensions.window.width}
        itemWidth={dimensions.window.width}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={true}
        autoplayInterval={4000}
        loop={true}
        enableMomentum={true}
        decelerationRate={0.9}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment="center"
      />
    </View>
  );
};

export default Banner;