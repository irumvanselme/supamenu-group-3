import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function SignInForm(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput placeholder="Your Email" />
      </View>

      <View style={styles.inputStyle}>
        <AntDesign name="lock" size={24} color="gray" />
        <TextInput placeholder="Password" />
      </View>

      <View style={styles.submitButton}>
        <Pressable style={styles.button}>
          <Text style={styles.cap}>Sign In</Text>
        </Pressable>
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
        <Text style={styles.fap}>Login with facebook</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
    marginTop: 40,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#F7941D",
    width: 327,
    height: 50,
  },
  cap: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  optionalView: {
    marginTop: 20,
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
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginTop: 20,
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
    marginTop: 20,
    alignItems: "center",
    padding: 15,
    width: 327,
    height: 60,
    borderRadius: 8,
    borderColor: "#EAECEE",
    borderWidth: 2,
  },
  gCap: {
    color: "gray",
  },
  bCap: {
    color: "gray",
  },
});
