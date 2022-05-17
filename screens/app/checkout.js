import {
    SafeAreaView,
    Pressable,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import { FontAwesome, Ionicons, EvilIcons } from "@expo/vector-icons";
import Screen from "../../layouts/Screen";

export default function CheckoutScreen({ navigation }) {
    return (
        <Screen>
            <SafeAreaView style={styles.mainView}>
                <View style={styles.container}>
                    <Pressable>
                        <Ionicons
                            style={styles.back}
                            name="chevron-back-outline"
                            size={60}
                            color="green"
                        />
                    </Pressable>

                    <View style={styles.checkoutHeader}>
                        <Text style={styles.title}>Checkout</Text>
                        <FontAwesome
                            style={styles.creditCard}
                            name="credit-card"
                            size={18}
                            color="black"
                        />
                    </View>

                    <View>
                        <Text style={styles.price}>Frw 16,000</Text>
                        <Text style={styles.tax}>Including VAT(18%)</Text>
                    </View>

                    <Pressable>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={[styles.cardContainer1]}>
                                <Text style={styles.card}>Credit card</Text>
                            </View>

                            <View style={styles.cardContainer2}>
                                <Text style={styles.cash}>Mobile & Cash</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.containerMtn}>
                    <Image
                        style={styles.containerImage}
                        source={require("../../assets/mtn.png")}
                    />
                    <View style={styles.top}>
                        <Text style={styles.heading}>MTN Mobile Money</Text>
                    </View>
                </View>

                <View style={styles.containerAirTel}>
                    <Image
                        style={styles.containerImage}
                        source={require("../../assets/air.png")}
                    />
                    <View style={styles.top}>
                        <Text style={styles.heading}>Airtel Money</Text>
                    </View>
                </View>

                <View style={styles.containerCash}>
                    <Image
                        style={styles.containerImage}
                        source={require("../../assets/cash.png")}
                    />
                    <View style={styles.top}>
                        <Text style={styles.heading}>Cash</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.paragraph}>
                        We will send you an order details to your {"\n"} email
                        after the successful payment
                    </Text>
                </View>

                <Pressable
                    onPress={() => {
                        navigation.navigate("Success");
                    }}
                >
                    <View style={styles.buttonAndIcon}>
                        <EvilIcons
                            style={styles.icon}
                            name="unlock"
                            size={50}
                            color="white"
                        />
                        <Text style={styles.buttonText}>Pay for the order</Text>
                    </View>
                </Pressable>
            </SafeAreaView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: -18,
        width: "100%",
        minHeight: "100%",
        paddingBottom: 100,
        backgroundColor: "#ffffff",
        zIndex: 2,
    },
    container: {
        backgroundColor: "#ffffff",
        height: 280,
        width: "96%",
        marginBottom: 100,
        marginTop: 0,
        borderRadius: 30,
        borderWidth: 0,
        elevation: 30,
    },
    price: {
        color: "#25D482",
        textAlign: "right",
        fontSize: 20,
        marginRight: 10,
        marginTop: -30,
    },
    tax: {
        color: "#000000",
        fontSize: 14,
        textAlign: "right",
        marginRight: 10,
    },
    buttons: {
        display: "inline",
    },

    btn1: {
        color: "#000000",
        backgroundColor: "#ffffff",
        marginLeft: 10,
    },
    btn2: {
        color: "#ffffff",
        backgroundColor: "#0CC805",
        marginLeft: 60,
    },
    heading: {
        color: "#000",
        fontSize: 20,
        marginLeft: 50,
        marginTop: 50,
    },
    containerImage: {
        width: 150,
        height: 140,
        marginLeft: 1,
        marginTop: 10,
    },
    top: {
        marginTop: 0,
    },

    containerMtn: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 80,
        marginLeft: 20,
        marginBottom: 60,
    },
    containerAirTel: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(242,242,242,1)",
        width: "90%",
        height: 130,
        marginLeft: 20,
        marginBottom: 10,
    },
    containerCash: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 80,
        marginLeft: 20,
        marginBottom: 140,
    },

    paragraph: {
        fontSize: 20,
        marginLeft: 20,
        color: "#000",
    },
    buttonAndIcon: {
        backgroundColor: "#25D482",
        width: "80%",
        height: 70,
        marginLeft: "10%",
        marginTop: 30,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
    },
    icon: {
        marginLeft: 70,
        alignItems: "center",
    },
    buttonText: {
        color: "rgb(255,255,255)",
        fontSize: 24,
        marginLeft: 10,
    },
    checkoutHeader: {
        display: "flex",
        flexDirection: "row",
        marginTop: 50,
        fontSize: 0,
    },
    title: {
        color: "#000",
        bold: "700",
        fontSize: 22,
        marginLeft: 40,
    },
    creditCard: {
        marginLeft: 12,
        marginTop: 10,
        backgroundColor: "gold",
        height: 18,
    },

    card: {
        backgroundColor: "#ffffff",
        fontSize: 20,
        color: "#000",
    },
    cash: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        backgroundColor: "#25D482",
    },

    cardContainer1: {
        minHeight: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        marginTop: 50,
        marginLeft: 40,
        width: 170,
        borderRadius: 20,
        borderWidth: 0,
        elevation: 10,
    },
    cardContainer2: {
        minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        height: 70,
        width: 170,
        marginLeft: -18,
        backgroundColor: "#25D489",
        borderRadius: 20,
    },
    back: {
        marginTop: 48,
        marginLeft: 20,
        backgroundColor: "rgba(242,242,242,1)",
        width: 60,
    },
});
