import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SignUpForm } from "../../components/signUpForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.contentView}>
                        <View style={styles.introView}>
                            <View style={styles.logo}>
                                <Text style={styles.logoText}>Supa</Text>
                                <Text style={styles.logoTextM}>Menu</Text>
                            </View>
                            <Text style={styles.welcomeText}>Welcome ...</Text>
                            <Text style={styles.signIntext}>
                                Please fill in the information
                            </Text>
                        </View>
                        <View style={styles.loginForm}>
                            <SignUpForm navigation={navigation} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7941D",
    },
    contentView: {
        marginTop: 100,
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignContent: "center",
        justifyContent: "flex-start",
    },
    introView: {
        marginBottom: 20,
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logoText: {
        fontSize: 40,
        fontWeight: "bold",
    },
    logoTextM: {
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 3,
        color: "#F7941D",
    },
    welcomeText: {
        color: "#3A4874",
        textAlign: "center",
        fontWeight: "bold",
    },
    signIntext: {
        textAlign: "center",
        color: "gray",
    },
    loginForm: {
        marginTop: 20,
        justifyContent: "flex-end",
    },
});
