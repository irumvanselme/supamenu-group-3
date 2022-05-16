import {
    SafeAreaView,
    Pressable,
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView,
} from "react-native";
import {FontAwesome,Ionicons,EvilIcons} from '@expo/vector-icons';


export default function CheckoutScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.mainView}>
                <View style={styles.container}>

                    <Ionicons style={styles.back} name="chevron-back-outline" size={50} color="green" />
                    <View style={styles.checkoutHeader}>
                        <Text style={styles.title}>Checkout</Text>
                        <FontAwesome style={styles.creditCard} name="credit-card" size={24} color="black"/>
                    </View>


                    <View>
                        <Text style={styles.price}>Frw 16,000</Text>
                        <Text style={styles.tax}>Including VAT(18%)</Text>
                    </View>

                    <Pressable>
                        <View style={{flexDirection: "row", width: "100%"}}>

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
                    <Image style={styles.containerImage} source={require("../../assets/mtn.png")}/>
                    <View style={styles.top}>
                        <Text style={styles.heading}>MTN Mobile Money</Text>
                    </View>
                </View>


                <View style={styles.containerAirTel}>
                    <Image style={styles.containerImage} source={require("../../assets/air.png")}/>
                    <View style={styles.top}>
                        <Text style={styles.heading}>Airtel Money</Text>
                    </View>
                </View>


                <View style={styles.containerCash}>
                    <Image style={styles.containerImage} source={require("../../assets/cash.png")}/>
                    <View style={styles.top}>
                        <Text style={styles.heading}>Cash</Text>
                    </View>
                </View>


                <View>
                    <Text style={styles.paragraph}>We will send you an order details to your {"\n"} email after the
                        successful payment</Text>
                </View>


                <Pressable onPress={() => {
                }}>
                    <View style={styles.buttonAndIcon}>
                        <EvilIcons style={styles.icon} name="unlock" size={70} color="white"/>
                        <Text style={styles.buttonText}>Pay for the order</Text>
                    </View>
                </Pressable>


            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    mainView: {
        //marginTop: 70,
        paddingBottom: 180,
        backgroundColor: "#ffffff",
    },
    container: {
        backgroundColor: "#ffffff",
        height: 400,
        width: "96%",
        marginBottom: 100,
        marginTop:0,
        borderRadius:30,
        borderWidth:0,
        shadowColor: "rgb(-107, 157, 56)",
        shadowRadius: 80,
        shadowOpacity: 10,

    },
    price: {
        color: "#0CC805",
        textAlign: "right",
        fontSize: 28,
        marginRight: 20
    },
    tax: {
        color: "#000000",
        fontSize: 24,
        textAlign: "right",
        marginRight: 20
    },
    buttons: {
        display: "inline"
    },

    btn1: {
        color: "#000000",
        backgroundColor: "#ffffff",
        marginLeft: 40
    },
    btn2: {
        color: "#ffffff",
        backgroundColor: "#0CC805",
        marginLeft: 60
    },
    heading: {
        color: "#000",
        fontSize: 40,
        marginLeft: 40,
        marginTop: '10%'
    },
    containerImage: {
        width: 180,
        height: 150,
        marginLeft: 1,
        marginTop: 10
    },
    top: {
        marginTop: 20,
    },

    containerMtn: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 80,
        marginLeft: 20,
        marginBottom: 100
    },
    containerAirTel: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(242,242,242,0.5)",
        width: "90%",
        height: 150,
        marginLeft: 20,
        marginBottom: 70
    },
    containerCash: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 80,
        marginLeft: 20,
        marginBottom: 70
    },

    paragraph: {
        fontSize: 24,
        marginLeft: 200,
        color: "#000"
    },
    buttonAndIcon: {
        backgroundColor: "rgb(-107, 157, 56)",
        width: "80%",
        height: 100,
        marginLeft: "10%",
        marginTop: 30,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center"
    },
    icon: {
        marginLeft: 100,
        alignItems: "center"
    },
    buttonText: {
        color: "rgb(255,255,255)",
        fontSize: 40,
        marginLeft: 10

    },
    checkoutHeader: {
        display: "flex",
        flexDirection: "row",
        marginTop: 70,
        fontSize:28
    },
    title: {
        color: "#000",
        bold: "700",
        fontSize: 28,
        marginLeft: 40
    },
    creditCard: {
        marginLeft: 12,
        marginTop: 10,
        backgroundColor: "gold"
    },

    card: {
        backgroundColor:"#ffffff",
        fontSize:35,
        color:"#000"
    },
    cash: {
        color: "#ffffff",
        textAlign: "center",
        fontSize:35

    },

    cardContainer1: {
        minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#ffffff",
        marginTop:60,
        marginLeft:40,
        width:400,
        borderRadius: 30,
        borderWidth:0,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 10,

    },
    cardContainer2: {
        minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:60,
        height:110,
        width:340,
        marginLeft:-18,
        backgroundColor: "rgb(-107, 157, 56)",
        borderRadius: 20,
    },
    back:{
        marginTop:40,
        marginLeft:20,
        backgroundColor:"rgba(242,242,242,0.6)",
        width:60

    }
})
