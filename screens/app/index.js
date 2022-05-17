import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { View, Text } from "react-native";
import Screen from "../../layouts/Screen";
import CartScreen from "./cart";
import SearchScreen from "./search";
import SearchResultScreen from "./search-result";
import ShowMenuScreen from "./show-menu";

import CheckOutScreen from "./checkout";
import SuccessScreen from "./order-success";
import RateScreen from "./rate";

export function HomeScreen() {
    return (
        <Screen>
            <Text>No Design Avaibale</Text>
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

export function ScanScreen() {
    const Stack = createStackNavigator();

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

export function CartNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name="Entry" component={CartScreen} />
            <Stack.Screen name="CheckOut" component={CheckOutScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
            <Stack.Screen name="Rate" component={RateScreen} />
        </Stack.Navigator>
    );
}
