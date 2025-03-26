import React from "react";

//👇🏻 app screens
import LoginScreen from "./screens/LoginScreen";
import Welcome from "./screens/welcome";
import Cart from "./screens/cart";

//👇🏻 React Navigation configurations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Cart' component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}