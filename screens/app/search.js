import { FontAwesome, Feather } from "@expo/vector-icons";
import react from "react";

import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants";

export default function SearchScreen({ navigation, route }) {
    const [searchQuery, setSearchQuery] = react.useState(route.params.value);

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#F7941D",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 200,
            }}
        >
            <View>
                <View
                    style={{
                        backgroundColor: "white",
                        flexDirection: "row",
                        padding: 5,
                        borderRadius: 15,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        minWidth: "90%",
                    }}
                >
                    <Feather name="search" size={24} color={Colors.primary} />
                    <TextInput
                        value={searchQuery}
                        onChangeText={(text) => {
                            setSearchQuery(text);
                        }}
                        style={{
                            paddingLeft: 20,
                        }}
                        placeholder="Search Your Prefeered Restaurant"
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 5,
                    }}
                >
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Button
                            title="Search"
                            onPress={() => {
                                navigation.navigate("All", {
                                    query: searchQuery,
                                });
                            }}
                            disabled={searchQuery.length == 0}
                        />
                    </View>

                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Button
                            title="Clear"
                            color="red"
                            onPress={() => {
                                navigation.navigate("All", {
                                    query: "",
                                });
                            }}
                        />
                    </View>
                </View>
            </View>

            <View
                style={{
                    alignItems: "center",
                    marginTop: 100,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        marginTop: 50,
                    }}
                >
                    Or
                </Text>
                <FontAwesome name="qrcode" size={100} color="black" />
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        marginTop: 50,
                    }}
                >
                    Scan Pay & Enjoy
                </Text>
            </View>
        </SafeAreaView>
    );
}
