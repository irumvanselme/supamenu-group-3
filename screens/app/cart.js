import { useState, useEffect } from "react";

import { AntDesign, Entypo } from "@expo/vector-icons";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../constants";
import { getToken } from "../../utils/token";
import axios from "axios";

function CartItem({ setItemsMap, item, setTotalPrice }) {
    const [items, setItems] = useState(0);

    return (
        <View style={styles.cartItemContainer}>
            <View>
                <Image
                    style={styles.cartItemImage}
                    source={{
                        uri: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x500.jpg",
                    }}
                />
            </View>
            <View style={{ flexGrow: 1, marginLeft: 10 }}>
                <View>
                    <Text style={{ fontSize: 16 }}>{item.description}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: "600" }}>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.unitPriceContainer}>
                    <View>
                        <Text style={styles.unitPriceText}>
                            Frw {item.unitPrice}
                        </Text>
                    </View>
                    <View style={styles.changeCartNumber}>
                        <TouchableOpacity
                            onPress={() => {
                                if (items == 0) return;
                                let newStateItems = items - 1;

                                setItems(newStateItems);

                                setItemsMap((state) => {
                                    state[item.id] = newStateItems;
                                    return state;
                                });

                                setTotalPrice(
                                    (totalPrice) => totalPrice - item.unitPrice
                                );
                            }}
                        >
                            <View>
                                <Entypo
                                    name="minus"
                                    size={24}
                                    color={Colors.primary}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 20,
                                paddingHorizontal: 15,
                            }}
                        >
                            {items}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                let newStateItems = items + 1;

                                setItems(newStateItems);

                                setItemsMap((state) => {
                                    state[item.id] = newStateItems;
                                    return state;
                                });

                                setTotalPrice(
                                    (totalPrice) => totalPrice + item.unitPrice
                                );
                            }}
                        >
                            <View>
                                <Entypo
                                    name="plus"
                                    size={24}
                                    color={Colors.primary}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default function CartScreen({ navigation, route }) {
    const [items] = useState(route.params.category.items);
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemsMap, setItemsMap] = useState({});

    useEffect(() => {
        let newObj = { ...itemsMap };

        for (let i = 0; i < items.length; i++) {
            newObj[items[i].id] = 0;
        }
        setItemsMap(newObj);
    }, [items]);

    const proceedToCheckout = async () => {
        try {
            let orderDetails = [];

            let keys = Object.keys(itemsMap);

            for (let i = 0; i < keys.length; i++) {
                orderDetails.push({
                    item: parseInt(keys[i]),
                    quantity: itemsMap[keys[i]],
                });
            }

            let orderDTO = {
                orderType: "BOOKING",
                seat: 0,
                status: "ORDERING",
                orderDetails,
            };

            try {
                const result = await axios.post(
                    "http://196.223.240.154:8099/supapp/api/orders",
                    orderDTO,
                    {
                        headers: {
                            Authorization: `Bearer ${await getToken()}`,
                        },
                    }
                );

                navigation.navigate("CheckOut", {
                    orderInfo: result.data.id,
                });

                Alert.alert("Sucsess", "Order booked successfully");
            } catch (error) {
                console.log(error.response.data);
                Alert.alert("Error", "Order wasn't booked sucessfylly");
            }

            // console.log(route.params.category.items);
        } catch (error) {
            return Alert.alert("Bad Request", error.response.data);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.screenTitle}>
                            Choose {route.params.hotel.name}
                        </Text>
                        <Text style={styles.screenFunction}>
                            {route.params.category.category.name}
                        </Text>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        {items.map((item, i) => (
                            <View key={i}>
                                <CartItem
                                    setItemsMap={setItemsMap}
                                    item={item}
                                    setTotalPrice={setTotalPrice}
                                />
                            </View>
                        ))}
                    </View>
                    <View>
                        <View style={styles.moreDrinksContainer}>
                            <Text style={styles.moreDrinksText}>
                                More Drinks
                            </Text>
                            <View>
                                <AntDesign
                                    name="arrowright"
                                    size={24}
                                    color={Colors.primary}
                                />
                            </View>
                        </View>
                        <View style={styles.totalMoneyContainer}>
                            <Text style={styles.totalMoneyText}>Total</Text>
                            <Text style={styles.totalMoney}>
                                Frw {totalPrice}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.proccedButton}
                            onPress={proceedToCheckout}
                        >
                            <View style={{}}>
                                <Text style={styles.proccedButtonText}>
                                    Proceed to checkout
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    unitPriceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1,
        marginTop: 10,
    },
    unitPriceText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: "bold",
    },
    changeCartNumber: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        borderRadius: 6,
    },
    cartItemImage: {
        width: 70,
        height: 70,
        borderRadius: 17,
    },
    cartItemContainer: {
        flexDirection: "row",
        flexGrow: 1,
        borderRadius: 10,
        marginBottom: 30,
        padding: 10,
        backgroundColor: "#E6E8EB",
    },
    screenTitle: {
        textAlign: "right",
        fontSize: 28,
        fontWeight: "bold",
    },
    screenFunction: {
        textAlign: "right",
        fontSize: 20,
        color: Colors.primary,
        marginTop: 30,
    },
    container: {
        padding: 20,
        paddingBottom: 200,
    },
    moreDrinksContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    moreDrinksText: {
        color: Colors.primary,
        paddingRight: 20,
    },
    totalMoneyContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    totalMoneyText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    totalMoney: {
        fontWeight: "bold",
        fontSize: 18,
        color: Colors.primary,
    },
    proccedButton: {
        width: "100%",
        backgroundColor: Colors.primary,
        height: 60,
        borderRadius: 10,
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    proccedButtonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
});
