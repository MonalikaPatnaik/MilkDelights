import { View, Image, StyleSheet } from 'react-native';
import Slide from './Slide';
import React from 'react'
import PropTypes from 'prop-types';


const MidSlide = ({ products, title }) => {
    
    return (
        <View style={styles.container}>
            {/* <View style={styles.leftComponent}> */}
                <Slide 
                    products={products}
                    title={title}
                />
            {/* </View> */}
        </View>
    )
}

MidSlide.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftComponent: {
        width: '80%',
    },
    rightComponent: {
        width: '20%',
        padding: 5,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        marginLeft: 10,
        alignItems: 'center',
    },
    image: {
        width: 230,
        height: '100%',
    }
});

export default MidSlide