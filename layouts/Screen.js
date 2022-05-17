import { View, ScrollView, StatusBar, Dimensions } from "react-native";

export default function Screen({ children }) {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    height: StatusBar.currentHeight,
                    backgroundColor: "white",
                }}
            />
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        width: Dimensions.get("screen").width,
                        minHeight:
                            Dimensions.get("screen").height -
                            StatusBar.currentHeight -
                            50,
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {children}
                </View>
            </ScrollView>
        </View>
    );
}
