import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SignUpForm } from "../../components/signUpForm";
export default function RegisterScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.introView}>
            <Image
              style={styles.image}
              source={require("./../../assets/logo.png")}
            />
            <Text style={styles.welcomeText}>Welcome ...</Text>
            <Text style={styles.signIntext}>
              Please fill in the information
            </Text>
          </View>
          <View style={styles.loginForm}>
            <SignUpForm />
          </View>
        </View>
      </View>
    </ScrollView>
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
