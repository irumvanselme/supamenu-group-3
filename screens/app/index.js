import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Screen from "../../layouts/Screen";
import CartScreen from "./cart";
import SearchScreen from "./search";
import SearchResultScreen from "./search-result";
import ShowMenuScreen from "./show-menu";

import CheckOutScreen from "./checkout";
import SuccessScreen from "./order-success";
import RateScreen from "./rate";

import { DeviceEventEmitter } from "react-native";
import { logOut } from "../../utils/token";
import react from "react";
import { AuthContext } from "../../hooks/authContext";

export function HomeScreen() {
    const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn

    return (
        <Screen>
            <View style={{
                marginTop: 200
            }}>
                <Text>No Design Avaibale</Text>
                <Button title="Logout " onPress={() => {
                    logOut()
                    setIsLoggedIn(false)
                }} />
            </View>
        </Screen>
    );
}

export function NotificationScreen() {
    return (
        <Screen>
            <Text>No Design Avaibale</Text>
        </Screen>
    );
}

export function ScanScreen({ navigation }) {
    const Stack = createStackNavigator();

    DeviceEventEmitter.addListener("event.goToCartFullProccess", (data) => {
        navigation.navigate("Cart", data);
    });

    // const goToCart = (params) => {
    //     navigation.navigate("Cart", params);
    // };

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="All" component={SearchResultScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="ShowMenu" component={ShowMenuScreen} />
        </Stack.Navigator>
    );
}

export function ClockScreen() {
    return (
        <Screen>
            <Text>No Design Avaibale</Text>
        </Screen>
    );
}

export function CartNavigator({ navigation, route }) {
    const Stack = createStackNavigator();

    if (route.params == undefined) {
        navigation.navigate("Scan");
        return (
            <View>
                <Text>First do the scanning</Text>
            </View>
        );
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name="Entry"
                initialParams={{ ...route.params }}
                component={CartScreen}
            />
            <Stack.Screen name="CheckOut" component={CheckOutScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
            <Stack.Screen name="Rate" component={RateScreen} />
        </Stack.Navigator>
    );
}
