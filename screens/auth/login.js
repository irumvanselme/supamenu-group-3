import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignInForm } from "../../components/signInForm";
export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      {/* <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.introView}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>Supa</Text>
              <Text style={styles.logoTextM}>Menu</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome ...</Text>
            <Text style={styles.signIntext}>Sign in to continue </Text>
          </View>
          <View style={styles.loginForm}>
            <SignInForm navigation={navigation} />
          </View>
        </View>
      </View> */}
      {/* </ScrollView> */}
      <View>
        <View style={styles.container}>
          <View style={styles.whiteContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>Supa</Text>
              <Text style={styles.logoTextM}>Menu</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome ...</Text>
            <Text style={styles.signIntext}>Sign in to continue </Text>
            <View style={styles.loginForm}>
              <SignInForm navigation={navigation} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7941D",
    height: "100%",
  },
  whiteContainer: {
    backgroundColor: "#fff",
    marginTop: "40%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentView: {
    marginTop: 100,
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: "center",
    justifyContent: "flex-start",
    // height: "100%",
  },
  introView: {
    // marginTop: 30,
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    marginLeft: 60,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
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
    justifyContent: "flex-end",
  },
});
