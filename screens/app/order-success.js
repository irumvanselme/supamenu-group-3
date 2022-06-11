import { Image, SafeAreaView,View, Pressable, Text, Modal, TouchableOpacity } from "react-native";
import FooterImage from "../../components/FooterImage";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import axios from "axios";
import { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { getToken } from "../../utils/token";


export default function OrderSuccessScreen({ navigation, route }) {
    const [modalVisible, setmodalVisible] = useState(false);
    const [orderData, setorderData] = useState({});

    const onDownloadInvoice = async ()=>{
        // await axios.get().then((res)=>{

        // }).catch((error)=>{
        //     alert("Unexpected error occured.")
            navigation.navigate("Rate")
        // })
    }

    const checkDetails = async ()=>{
        await axios.get(`http://196.223.240.154:8099/supapp/api/order-items/${route.params.orderInfo}`, {
            headers:{
                Authorization: `Bearer ${await getToken()}`,
            }
        }).then((res)=>{
         setorderData(res.data.item)
         setmodalVisible(true)
         console.log(route.params.orderInfo);
        }).catch((error)=>{
            alert("Unexpected error occured.")
            setmodalVisible(false)
            console.log(route.params.orderInfo);
        })
    }

    // useEffect(() => {
    //     if(modalVisible){
    //         getOrderData();
    //     }
    // }, [modalVisible])
    
    return (
        <SafeAreaView style={[styles.container, {flex: 1}]}>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setmodalVisible(!modalVisible);
                    }}
            >
              <View
                style={{backgroundColor: "#000000aa",}}
                >
                        <View style={[styles.modal]}>
                            <View style={{flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", backgroundColor: "blue", padding: 10}}>
                                <Pressable
                                    onPress={() =>
                                        setmodalVisible(!modalVisible)
                                    }
                                >
                                    <EvilIcons
                                        style={styles.buttonClose}
                                        name="close"
                                        size={30}
                                        color="white"
                                    />
                                </Pressable>
                                <Text style={{color: "white"}}>Order Details</Text>
                            </View>     
                            <View style={{padding: 20}}>
                                <Text>Name: {orderData?.name}</Text>
                                <Text>Price: {orderData?.unitPrice}</Text>
                                {/* <Image></Image> */}
                            </View>
                        </View>     
                </View>
            </Modal>
            <Image
                source={require("../../assets/images/order-success.png")}
                style={{ width: 300, height: 200 }}
            />
            <Text style={styles.text}>Payment Success, Yayy!</Text>
            <Text
                style={{
                    color: "white",
                    fontSize: 17,
                    textAlign: "center",
                }}
            >
                We will send order details and invoice in your contact no and
                registered email.
            </Text>
            
            <TouchableOpacity 
            onPress={() => {
                checkDetails();
            }}>
            <Text style={{flexDirection: "row", alignItems: 'center', justifyContent: "center"}}>
            <Text style={styles.text}>Check Details</Text>
            <AntDesign name="arrowright" size={24} color="white" />
            </Text>
            </TouchableOpacity>

            <TouchableHighlight onPressIn={()=> onDownloadInvoice()} 
            style={{backgroundColor: "#f7941d", padding: 15, borderRadius: 5}}>
               <Text style={{color: "white", fontSize: 16}}>Download Invoice</Text>
            </TouchableHighlight>

            <FooterImage />
        </SafeAreaView>
    );
}
