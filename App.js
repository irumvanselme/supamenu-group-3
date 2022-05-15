import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn/dist";
import EntryScreen from "./screens/entry-screen";

import utiilities from "./tailwind.json";

export default function App() {
    const tailwind = useTailwind();

    console.log(tailwind("bg-red-500"));

    return (
        <NavigationContainer>
            <TailwindProvider utilities={utiilities}>
                <Navigator />
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
