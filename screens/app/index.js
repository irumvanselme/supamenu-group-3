import { View, Text } from "react-native";
import CartScreen from "./cart";
import SearchScreen from "./search";

export function HomeScreen() {
    return (
        <View>
            <Text>Yello</Text>
        </View>
    );
}

export function NotificationScreen() {
    return (
        <View>
            <Text>Yello</Text>
        </View>
    );
}

export function ScanScreen() {
    return <SearchScreen />;
}

export function ClockScreen() {
    return (
        <View>
            <Text>Yello</Text>
        </View>
    );
}

export function CartNavigator() {
    return <CartScreen />;
}