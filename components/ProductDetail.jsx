import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ product }) => {
    const assured = 'https://res.cloudinary.com/dx0dgujbj/image/upload/c_thumb,w_1024,h_300,g_auto/v1690433349/Products/ASSURED-logo_tfge0s.jpg';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    // const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{product.title.longTitle}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>8 Ratings & 1 Reviews</Text>
                <Image source={{ uri: assured }} style={styles.assuredImage} />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>₹{product.price.cost}/kg</Text>
                <Text style={styles.priceText}>₹{product.price.mrp}/kg</Text>
                <Text style={styles.priceText}>{product.price.discount}</Text>
            </View>
            <Text style={styles.offersText}>Available Offers</Text>
            <View style={styles.offersContainer}>
                <Text style={styles.offerText}><Icon name="star" type="font-awesome" color="#388E3C" /> Special Price Get extra 10% upto ₹50 on 10kg(price inclusive of discount) T&C</Text>
                <Text style={styles.offerText}><Icon name="star" type="font-awesome" color="#388E3C" /> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Text>
                <Text style={styles.offerText}><Icon name="star" type="font-awesome" color="#388E3C" /> Bank Offer 20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</Text>
                <Text style={styles.offerText}><Icon name="star" type="font-awesome" color="#388E3C" /> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Text>
                <Text style={styles.offerText}><Icon name="star" type="font-awesome" color="#388E3C" /> Combo Offer Buy 2 items save 5%;Buy 3 or more save 10%</Text>
            </View>
            <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryText}>Delivery</Text>
                <Text style={styles.deliveryText}>Delivery by {date.toDateString()} | ₹40</Text>
            </View>
            <View style={styles.warrantyContainer}>
                <Text style={styles.warrantyText}>Warranty</Text>
                <Text style={styles.warrantyText}>No Warranty</Text>
            </View>
            <View style={styles.sellerContainer}>
                <Text style={styles.sellerText}>Seller</Text>
                <Text style={styles.sellerText}>SuperComNet</Text>
                <Text style={styles.sellerText}>GST invoice available</Text>
                <Text style={styles.sellerText}>View more sellers starting from ₹329</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Description</Text>
                <Text style={styles.descriptionText}>{product.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    ratingText: {
        fontSize: 14,
        color: '#878787',
    },
    assuredImage: {
        width: 77,
        marginLeft: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    priceText: {
        fontSize: 14,
        color: '#333',
        marginRight: 10,
    },
    offersText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
    },
    offersContainer: {
        marginTop: 10,
    },
    offerText: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
    deliveryContainer: {
        marginTop: 20,
    },
    deliveryText: {
        fontSize: 14,
        color: '#333',
    },
    warrantyContainer: {
        marginTop: 20,
    },
    warrantyText: {
        fontSize: 14,
        color: '#333',
    },
    sellerContainer: {
        marginTop: 20,
    },
    sellerText: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
    descriptionContainer: {
        marginTop: 20,
    },
    descriptionText: {
        fontSize: 14,
        color: '#333',
    },
});

export default ProductDetail;