// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// // import Navbar from '../../components/Navbar';
// import Banner from '../../components/Banner';
// import Slide from '../../components/Slide';
// import { getProducts } from '../../redux/actions/productAction'
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../../constants/Loader';
// import MidSlide from '../../components/MidSlide';

// const styles = StyleSheet.create({
//   container: {
//     padding: 7,
//     backgroundColor: '#f2f2f2'
//   }
// });

// const Home = () => {
//   const { products } = useSelector((state) => state.getProducts);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch])

//   // if (loading) {
//   //   return <Loader />;
//   // }

//   return (
//     <View>
//       <View style={styles.container}>
//         <Banner />
//       </View>
//       {/* <Navbar /> */}
//       <View style={styles.container}>    
//         <MidSlide
//           products={products}
//           title='Deal of the Day'
//         />
//         <Slide
//           products={products}
//           title='Suggested Items'
//         />
//         <Slide
//           products={products}
//           title='Top Selection'
//         />
//         <Slide
//           products={products}
//           title='Recommended Items'
//         />
//       </View>
//     </View>
//   );
// }

// export default Home;