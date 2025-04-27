import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons, you can use Ionicons or any icon library

export default function MyAccountScreen() {
  const sections = [
    { id: 1, title: 'Orders', icon: 'receipt-outline' },
    { id: 2, title: 'Wishlist', icon: 'heart-outline' },
    { id: 3, title: 'Billing Address', icon: 'location-outline' },
    { id: 4, title: 'Shipping Address', icon: 'location-outline' },
    { id: 5, title: 'Account Info', icon: 'person-outline' },
    { id: 6, title: 'Change Password', icon: 'lock-closed-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with user profile picture
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome back, Naful</Text>
      </View>

      {/* Sections */}
      <View style={styles.grid}>
        {sections.map((section) => (
          <TouchableOpacity key={section.id} style={styles.gridItem} onPress={() => alert(`${section.title} clicked!`)}>
            <Ionicons name={section.icon} size={30} color="#4A90E2" />
            <Text style={styles.gridText}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gridText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
