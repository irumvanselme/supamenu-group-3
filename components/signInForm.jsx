import react from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../hooks/authContext";
import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";

export function SignInForm(props) {
  const { navigation } = props;

  const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn;

  const { handleSubmit, handleChange, handleReset, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (!values.email || !values.password) {
        Alert.alert("Error", "You must fill in all fields");
        return;
      }
      const response = await fetch(
        "http://196.223.240.154:8099/supapp/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: values.email,
            password: values.password,
          }),
        }
      );

      if (!response.ok) {
        Alert.alert("Error", "Invalid credentials");
      }

      const data = await response.json();
      Alert.alert("Success", "You have successfully signed in");

      if (data.token.accessToken) {
        await SecureStore.setItemAsync("token", data.token.accessToken);
        setIsLoggedIn(true);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Your Email"
          value={values.email}
          onChangeText={handleChange("email")}
        />
      </View>
      <View style={styles.inputStyle}>
        <AntDesign name="lock" size={24} color="gray" />
        <TextInput
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange("password")}
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.cap}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionalView}>
        <View style={styles.leftOption}></View>
        <Text style={styles.optionalText}>OR</Text>
        <View style={styles.RightOption}></View>
      </View>
      <View style={styles.gButton}>
        <FontAwesome name="google" size={24} color="black" />
        <Text style={styles.gCap}>Login with google</Text>
      </View>
      <View style={styles.fbButton}>
        <FontAwesome name="facebook" size={24} color="black" />
        <Text style={styles.fCap}>Login with facebook</Text>
      </View>

      <View style={styles.fgtPass}>
        <Text style={styles.fgtPassText}>Forgot Password</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Go to register");
          navigation.navigate("Register");
        }}
      >
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>Don't have an account?</Text>
          <Text style={styles.bottomTextTwo}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
    width: 327,
    height: 54,
    borderRadius: 8,
    borderColor: "#EAECEE",
    borderWidth: 2,
    paddingLeft: 10,
  },
  submitButton: {
    marginTop: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#F7941D",
    width: 327,
    height: 50,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.1,
    elevation: 1,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  cap: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  optionalView: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftOption: {
    width: "30%",
    height: 1,
    backgroundColor: "gray",
  },
  RightOption: {
    width: "30%",
    height: 1,
    backgroundColor: "gray",
  },
  optionalText: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  pmgSignIn: {
    marginTop: 10,
  },
  pmgSignInText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  bottomContent: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  bottomText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  bottomTextTwo: {
    fontSize: 16,
    color: "#F7941D",
    textAlign: "center",
  },
  gButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignItems: "center",
    padding: 15,
    width: 327,
    height: 60,
    borderRadius: 8,
    Color: "gray",
    borderRadius: 8,
    borderColor: "#EAECEE",
    borderWidth: 2,
  },
  fbButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignItems: "center",
    padding: 15,
    width: 327,
    height: 60,
    borderRadius: 8,
    borderColor: "#EAECEE",
    borderWidth: 2,
  },
  gCap: {
    marginLeft: 10,
    color: "gray",
  },
  fCap: {
    marginLeft: 10,
    color: "gray",
  },
  fgtPass: {
    marginTop: 10,
  },
  fgtPassText: {
    fontSize: 16,
    color: "#F7941D",
  },
});
