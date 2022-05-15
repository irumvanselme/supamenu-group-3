import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import CartScreen from "./screens/app/cart";
import CheckoutScreen from "./screens/app/checkout";
import OrderSuccessScreen from "./screens/app/order-success";
import RateScreen from "./screens/app/rate";
import SearchResultScreen from "./screens/app/search-result";
import ShowMenuScreen from "./screens/app/show-menu";

import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import SplashScreen from "./screens/auth/splash";

export default function Navigator() {
    const isLoggedIn = false;

    if (isLoggedIn) return <AppNavigator />;
    else return <AuthNavigator />;
}

function AuthNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

function AppNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator initialRouteName="Search">
            <Tabs.Screen name="Cart" component={CartScreen} />
            <Tabs.Screen name="Checkout" component={CheckoutScreen} />
            <Tabs.Screen name="OrderSuccess" component={OrderSuccessScreen} />
            <Tabs.Screen name="Rate" component={RateScreen} />
            <Tabs.Screen name="Search" component={SearchResultScreen} />
            <Tabs.Screen name="SearchResults" component={SearchResultScreen} />
            <Tabs.Screen name="ShowMenu" component={ShowMenuScreen} />
        </Tabs.Navigator>
    );
}
