import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        header: () => (
          <View style={styles.headerContainer}>
            {/* User Section */}

            {/* Icons Section */}
            <View style={styles.iconSection}>
              <View style={styles.userSection}>
                <FontAwesome name="user-circle" size={28} color="black" />
                <Text style={styles.userName}>Hello, John</Text>
              </View>
              <View style={styles.icons}>
                <Pressable>
                  <FontAwesome
                    name="heart"
                    size={24}
                    color="red"
                    style={styles.icon}
                  />
                </Pressable>
                <Pressable>
                  <FontAwesome
                    name="bell"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </Pressable>
                <Pressable>
                  <FontAwesome
                    name="shopping-cart"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
              <FontAwesome
                name="search"
                size={20}
                color="gray"
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search for products..."
                style={styles.searchInput}
              />
            </View>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "My Orders",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-alt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: "white",
  },
  iconSection: {
    flexDirection: 'row',  
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  userSection: {
    flexDirection: 'row',  
    alignItems: 'center',  
  },
  userName: {
    marginLeft: 15, 
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',  
    alignItems: 'center',  
  },
  icon: {
    marginLeft: 15,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});
