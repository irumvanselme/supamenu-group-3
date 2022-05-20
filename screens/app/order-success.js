import { Image, SafeAreaView, Text, Button } from "react-native";
import FooterImage from "../../components/FooterImage";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import useOrder from "../../hooks/useOrder";

export default function OrderSuccessScreen({ navigation }) {
    
    const [results, orderError, orderServiceAPI] = useOrder()

    const onDownloadInvoice = async () => {
         let res = await orderServiceAPI(1);
        navigation.navigate("Rate");
    };

    return (
        <SafeAreaView style={[styles.container, {flex: 1}]}>
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
                redistered email.
            </Text>
            
            <Text style={{flexDirection: "row", alignItems: 'center', justifyContent: "center"}}>
            <Text style={styles.text}>Check Details</Text>
            <AntDesign name="arrowright" size={24} color="white" />
            </Text>

            <TouchableHighlight onPressIn={()=> onDownloadInvoice()} 
            style={{backgroundColor: "#f7941d", padding: 15, borderRadius: 5}}>
               <Text style={{color: "white", fontSize: 16}}>Download Invoice</Text>
            </TouchableHighlight>

            <FooterImage />
        </SafeAreaView>
    );
}
