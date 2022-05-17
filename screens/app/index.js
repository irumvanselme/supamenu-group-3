import { View, Text } from "react-native";
import Screen from "../../layouts/Screen";
import CartScreen from "./cart";
import SearchScreen from "./search";

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
    return <SearchScreen />;
}

export function ClockScreen() {
    return (
        <Screen>
            <Text>No Design Avaibale</Text>
        </Screen>
    );
}

export function CartNavigator() {
    return <CartScreen />;
}
