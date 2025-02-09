import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Product } from "../redux/actions/cartActions";

interface Props {
  items: Product[];  // ✅ Define `items` as an array of `Product`
}

const TotalView: React.FC<Props> = ({ items }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    items.forEach((item) => {
      const quantity = item.quantity ?? 1;  // ✅ Ensure quantity is never undefined
      totalPrice += item.price.mrp * quantity;
      totalDiscount += (item.price.mrp - item.price.cost) * quantity;
    });
    setPrice(totalPrice);
    setDiscount(totalDiscount);
  }, [items]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PRICE DETAILS</Text>
      <Text>Price ({items.length} items): ₹{price}</Text>
      <Text>Discount: -₹{discount}</Text>
      <Text>Delivery Charges: ₹40</Text>
      <Text style={styles.total}>Total Amount: ₹{price - discount + 40}</Text>
      <Text style={styles.savings}>You save ₹{discount}!</Text>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: "#fff", marginTop: 10 },
  heading: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  savings: { fontSize: 14, color: "green", marginTop: 5 },
});
