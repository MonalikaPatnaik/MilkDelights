import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = ({ product }) => {
    const assured = 'https://res.cloudinary.com/dx0dgujbj/image/upload/c_thumb,w_1024,h_300,g_auto/v1690433349/Products/ASSURED-logo_tfge0s.jpg';
    const deliveryDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toDateString();

    return (
        <ScrollView style={styles.container}>
            {/* Product Image */}
            {/* <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.url || 'https://via.placeholder.com/300' }}
                    style={styles.productImage}
                    resizeMode="contain"
                />
            </View> */}

            {/* Title */}
            <Text style={styles.title}>{product.title?.longTitle}</Text>

            {/* Rating & Assured */}
            <View style={styles.row}>
                <Text style={styles.ratingText}>⭐ 8 Ratings & 1 Review</Text>
                <Image source={{ uri: assured }} style={styles.assuredImage} />
            </View>

            {/* Price */}
            <View style={styles.priceContainer}>
                <Text style={styles.currentPrice}>₹{product.price?.cost}/kg</Text>
                <Text style={styles.originalPrice}>₹{product.price?.mrp}/kg</Text>
                <Text style={styles.discountText}>{product.price?.discount} Off</Text>
            </View>

            {/* Offers */}
            <Text style={styles.sectionTitle}>Available Offers</Text>
            <View style={styles.offersContainer}>
                {offerItem('Special Price: Extra 10% off upto ₹50 on 10kg')}
                {offerItem('Bank Offer: 5% Unlimited Cashback on Axis Bank Credit Card')}
                {offerItem('Combo Offer: Buy 2 items save 5%; Buy 3 or more save 10%')}
            </View>

            {/* Delivery */}
            <InfoCard title="Delivery">
                Delivery by {deliveryDate} | ₹40
            </InfoCard>

            {/* Warranty */}
            <InfoCard title="Warranty">
                No Warranty
            </InfoCard>

            {/* Seller */}
            <InfoCard title="Seller">
                <Text style={styles.sellerName}>SuperComNet</Text>
                <Text>GST invoice available</Text>
                <Text style={styles.link}>View more sellers starting from ₹329</Text>
            </InfoCard>

            {/* Description */}
            <InfoCard title="Description">
                {product.description}
            </InfoCard>
        </ScrollView>
    );
};

// Offer Item Component
const offerItem = (text: string) => (
    <View style={styles.offerRow}>
        <Ionicons name="checkmark-circle" size={18} color="#007BFF" />
        <Text style={styles.offerText}>{text}</Text>
    </View>
);

// Info Card Component
const InfoCard = ({ title, children }) => (
    <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardContent}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    imageContainer: {
        backgroundColor: '#F2F7FF',
        borderRadius: 8,
        marginBottom: 16,
        padding: 10,
    },
    productImage: {
        width: '100%',
        height: 250,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    ratingText: {
        fontSize: 14,
        color: '#666',
    },
    assuredImage: {
        width: 80,
        height: 18,
        resizeMode: 'contain',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    currentPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    originalPrice: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'line-through',
        marginLeft: 10,
    },
    discountText: {
        fontSize: 16,
        color: '#28A745',
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007BFF',
        marginVertical: 8,
    },
    offersContainer: {
        backgroundColor: '#F9FBFF',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E1E7F0',
    },
    offerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    offerText: {
        fontSize: 14,
        color: '#444',
        marginLeft: 8,
    },
    infoCard: {
        backgroundColor: '#F9FBFF',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E1E7F0',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007BFF',
        marginBottom: 4,
    },
    cardContent: {
        fontSize: 14,
        color: '#555',
    },
    sellerName: {
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 4,
    },
    link: {
        color: '#007BFF',
        marginTop: 4,
        textDecorationLine: 'underline',
    },
});

export default ProductDetail;
