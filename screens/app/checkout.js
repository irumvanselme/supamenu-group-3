import { useState } from "react";
import {
    SafeAreaView,
    Pressable,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
} from "react-native";
import { FontAwesome, Ionicons, EvilIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import Screen from "../../layouts/Screen";
import axios from "axios";

import { getToken } from "../../utils/token";

export default function CheckoutScreen({ navigation, route }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [telecom, setTelecom] = useState("MTN");

    const [orderInfo, setOrderInfo] = useState(route.params.orderInfo);
    const [regChannel, setRegChannel] = useState("USSD");

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            msisdn: "",
            orderInfo,
            regChannel: "USSD",
        },
        onSubmit: async (values) => {
            if (!values.msisdn || !values.orderInfo) {
                Alert.alert("Error", "Your phone number is required");
                return;
            }

            try {
                const result = await axios.post(
                    "http://196.223.240.154:8099/supapp/api/payments/momo",
                    {
                        msisdn: values.msisdn,
                        orderInfo: values.orderInfo,
                        regChannel: values.regChannel,
                        telecom,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${await getToken()}`,
                        },
                    })
                     
                    Alert.alert("Sucsess", "Payment completed successfully");
                    } catch (err) {
                    Alert.alert("Error", "Something went wrong");
            }
        },
    });

    const payByCash = async () => {
        try {
            const result = await axios.post(
                "http://196.223.240.154:8099/supapp/api/payments/cash",
                {
                    orderInfo,
                    regChannel
                },
                 {
                    headers: {Authorization: `Bearer ${await getToken()}`}
                })
            Alert.alert("Sucsess", "Payment completed successfully");
        } catch (error) {
            Alert.alert("Error", "Payment didn't complete sucessfylly");
            console.log(error.response.data)
        }
    };

    return (
        <Screen>
            <SafeAreaView style={styles.mainView}>
                <View style={styles.container}>
                    <Pressable>
                        <Ionicons
                            style={styles.back}
                            name="chevron-back-outline"
                            size={30}
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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#000000aa",
                        }}
                    >
                        <View style={styles.modal}>
                            <View>
                                <Pressable
                                    onPress={() =>
                                        setModalVisible(!modalVisible)
                                    }
                                >
                                    <EvilIcons
                                        style={styles.buttonClose}
                                        name="close"
                                        size={30}
                                        color="black"
                                    />
                                </Pressable>
                                <Text style={styles.heading1}>Payment</Text>
                            </View>
                            <View style={styles.form}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your phone number"
                                    value={values.msisdn}
                                    onChangeText={handleChange("msisdn")}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    handleSubmit();
                                }}
                            >
                                <View style={styles.mButton}>
                                    <Text style={styles.mText}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    onPress={() => {
                        setTelecom("MTN");
                        setModalVisible(true);
                    }}
                >
                    <View style={styles.containerMtn}>
                        <Image
                            style={styles.containerImage}
                            source={require("../../assets/mtn.png")}
                        />
                        <View style={styles.top}>
                            <Text style={styles.heading}>MTN Mobile Money</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setTelecom("AIRTEL");
                        setModalVisible(true);
                    }}
                >
                    <View style={styles.containerAirTel}>
                        <Image
                            style={styles.containerImage}
                            source={require("../../assets/air.png")}
                        />
                        <View style={styles.top}>
                            <Text style={styles.heading}>Airtel Money</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={payByCash}>
                    <View style={styles.containerCash}>
                        <Image
                            style={styles.containerImage}
                            source={require("../../assets/cash.png")}
                        />
                        <View style={styles.top}>
                            <Text style={styles.heading}>Cash</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
        marginBottom: 70,
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
        fontSize: 17,
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
        width: 180,
        height: 130,
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
        marginBottom: 170,
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
        fontWeight: "700",
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
        width: 40,
    },
    heading1: {
        textAlign: "center",
        color: "black",
        fontSize: 24,
        marginTop: 50,
    },
    textInput: {
        borderWidth: 2,
        borderColor: "#e1e1e1",
        height: 55,
        color: "#000",
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
    },
    form: {
        width: 300,
        marginLeft: 50,
        marginTop: 40,
    },
    modal: {
        height: "50%",
        backgroundColor: "#fff",
        marginTop: 340,
        margin: 50,
        elevation: 60,
        borderRadius: 17,
    },
    mButton: {
        marginTop: 30,
        marginLeft: 100,
        backgroundColor: "#25D482",
        width: 200,
        height: 40,
        borderRadius: 15,
    },
    mText: {
        color: "#fff",
        textAlign: "center",
        padding: 10,
    },
    buttonClose: {
        textAlign: "right",
        marginRight: 15,
        marginTop: 10,
        color: "red",
    },
});
