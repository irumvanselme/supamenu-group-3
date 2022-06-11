import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    FlatList,
} from "react-native";
import styles from "../../styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyMenu from "../../components/MyMenu";
import react from "react";
import { getToken } from "../../utils/token";

import axios from "axios";

export default function ShowMenuScreen({ navigation, route }) {
    const [items, setItems] = react.useState([]);

    react.useEffect(() => {
        (async function () {
            let token = await getToken();

            let { data } = await axios.get(
                "http://196.223.240.154:8099/supapp/api/menu-categories/listAll/service-provider/" +
                    route.params.item.id,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            
            setItems(data);
        })();
    }, []);

    // function goToCart(params) {
    //     return () => route.params.goToCart(params);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={[styles.text, { marginBottom: 20 }]}>
                    Choose {route.params.item.name}
                </Text>
            </View>

            <View style={othestyle.options}>
                <View style={othestyle.centeredItem}>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons
                            name="truck-delivery"
                            size={40}
                            color="#f7941d"
                            style={{ marginBottom: 15 }}
                        />
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: "white",
                                    marginTop: 10,
                                    marginLeft: 10,
                                },
                            ]}
                        >
                            N8
                        </Text>
                    </View>
                    <Text style={[styles.text, { color: "white" }]}>
                        Ordered
                    </Text>
                </View>
                <View style={othestyle.verticleLine}></View>
                <View style={othestyle.centeredItem}>
                    <FontAwesome5
                        name="phone"
                        size={40}
                        color="#f7941d"
                        style={{ marginBottom: 15 }}
                    />
                    <Text
                        style={[
                            styles.text,
                            { color: "white", fontWeight: "normal" },
                        ]}
                    >
                        Call Waiter
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 30, marginBottom: 30 }}>
                <Text style={styles.text}>Menu</Text>
            </View>

            {items.length !== 0 &&<FlatList
                data={items}
                renderItem={({ item }) => (
                    <MyMenu
                        hotel={route.params.item}
                        // handler={goToCart}
                        item={item}
                        name={item.category.name}
                    />
                )}
            />}

            {items.length === 0 && (
                <View>
                    <Text
                        style={
                            { color: "white", fontWeight: "bold", height: 300 }}
                    >
                        Yello Nothing here
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
}

const othestyle = StyleSheet.create({
    options: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    verticleLine: {
        height: 100,
        width: 2,
        backgroundColor: "#f7941d",
        margin: 10,
    },
    centeredItem: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
