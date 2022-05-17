import { Image, SafeAreaView, Text, Button } from "react-native";
import FooterImage from "../../components/FooterImage";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../styles";

export default function OrderSuccessScreen({ navigation }) {
    const onDownloadInvoice = () => {
        navigation.navigate("Rate");
    };
    return (
        <SafeAreaView style={styles.container}>
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
            <Text style={styles.text}>Check Details</Text>
            <AntDesign name="arrowright" size={24} color="white" />
            <Button
                onPress={onDownloadInvoice}
                title="Download Invoice"
                color="#f7941d"
                accessibilityLabel="Learn more about this invoice button"
            />
            <FooterImage />
        </SafeAreaView>
    );
}
