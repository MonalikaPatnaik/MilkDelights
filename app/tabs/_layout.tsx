import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
          height: 60,
          paddingBottom: 6,
          paddingTop: 6,
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          height: 70,
          elevation: 4, // Android shadow
          shadowColor: '#000', // iOS shadow
          shadowOpacity: 0.1,
          shadowRadius: 8,
          shadowOffset: { height: 2, width: 0 },
        },
        headerTitleAlign: 'left',
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{
                width: 120,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push('/cart')}
            style={{
              marginRight: 16,
              padding: 8,
              backgroundColor: '#f1f5f9',
              borderRadius: 50,
            }}
            activeOpacity={0.7}
          >
            <Ionicons name="cart-outline" size={24} color="#1E3A5F" />
            {/* Optionally, here you can add badge for cart items */}
          </TouchableOpacity>
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="myorders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
