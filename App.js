import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn/dist";
import EntryScreen from "./screens/entry-screen";
import CheckoutScreen from "./screens/app/checkout";

import Navigator from "./navigator";

import utiilities from "./tailwind.json";

export default function App() {
    const tailwind = useTailwind();

    return (
        <NavigationContainer>
            <TailwindProvider utilities={utiilities}>
                {/* <Navigator /> */}
                <CheckoutScreen/>
            </TailwindProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
