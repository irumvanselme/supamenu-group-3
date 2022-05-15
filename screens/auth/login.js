import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignInForm } from "../../components/signInForm";
export default function LoginScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.introView}>
              <Image
                style={styles.image}
                source={require("./../../assets/logo.png")}
              />
            </View>
            {/* <ScrollView> */}
            <View style={styles.loginForm}>
              <SignInForm />
            </View>
            {/* </ScrollView> */}
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
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  introView: {
    // height: 200,
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    marginLeft: 60,
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
