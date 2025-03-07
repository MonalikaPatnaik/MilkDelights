import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');


const Slide = ({ products, timer, title }) => {
  const timerURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderTimer = ({ hours, minutes, seconds }) => {
    return (
      <Text style={styles.timerText}>
        {hours} : {minutes} : {seconds} Left
      </Text>
    );
  };

  const renderItem = ({ item: temp }) => (
    <Link href={`/product/${temp.id}`} style={styles.carouselItem}>
      <View style={styles.itemContainer}>
        <Image 
          source={{ uri: temp.url }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>{temp.title.shortTitle}</Text>
        <Text style={styles.discountText}>{temp.discount}</Text>
        <Text style={styles.taglineText}>{temp.tagline}</Text>
      </View>
    </Link>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dealContainer}>
        <Text style={styles.dealText}>{title}</Text>
        {timer && (
          <View style={styles.timer}>
            <Image 
              source={{ uri: timerURL }}
              style={styles.timerIcon}
              resizeMode="contain"
            />
            <Text style={styles.timerText}>Time Left</Text>
          </View>
        )}
        <Link href={'/productView'} style={styles.viewAllButton}>
          <Text style={styles.buttonText}>View All</Text>
        </Link>
      </View>
      <View style={styles.divider} />
      <Carousel
        data={products}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth / 2.2}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.carousel}
        loop={false}
        autoplay={false}
        decelerationRate={0.9}
        snapToInterval={screenWidth / 2.2}
        snapToAlignment={'start'}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
      />
    </View>
  );
};

Slide.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.shape({
        shortTitle: PropTypes.string
      }),
      discount: PropTypes.string,
      tagline: PropTypes.string
    })
  ).isRequired,
  timer: PropTypes.bool,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },
  dealContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  dealText: {
    fontSize: 22,
    fontWeight: '600',
    marginRight: 25,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timerIcon: {
    width: 24,
    height: 24,
  },
  timerText: {
    color: '#7f7f7f',
    marginLeft: 5,
  },
  viewAllButton: {
    marginLeft: 'auto',
    backgroundColor: '#fb641b',
    borderRadius: 2,
    padding: 10,
    width: 150,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
  },
  carousel: {
    flexGrow: 0,
  },
  carouselItem: {
    padding: 5,
  },
  itemContainer: {
    padding: 15,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    marginTop: 5,
  },
  discountText: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  taglineText: {
    fontSize: 14,
    color: '#212121',
    opacity: 0.6,
    marginTop: 5,
  }
});

export default Slide;
