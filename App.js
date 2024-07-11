import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Details from "./Screens/Details";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator for screens nested in the Drawer
function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={MainStackNavigator} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
