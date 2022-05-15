import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export function SignUpForm() {
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <Feather name="user" size={24} color="gray" />
        <TextInput placeholder="Full Name" />
      </View>
      <View style={styles.inputStyle}>
        <Feather name="phone" size={24} color="gray" />
        <TextInput placeholder="Phone Number" />
      </View>
      <View style={styles.inputStyle}>
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput placeholder="Your Email" />
      </View>

      <View style={styles.submitButton}>
        <Pressable style={styles.button}>
          <Text style={styles.cap}>Proceed</Text>
        </Pressable>
      </View>

      <View style={styles.optionalView}>
        <View style={styles.leftOption}></View>
        <Text style={styles.optionalText}>OR</Text>
        <View style={styles.RightOption}></View>
      </View>

      <View style={styles.pmgSignIn}>
        <Text style={styles.pmgSignInText}>If you have a PMG account</Text>
        <View style={styles.submitButton}>
          <Pressable style={styles.button}>
            <Text style={styles.cap}>sign in</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <Text style={styles.bottomTextTwo}>Register</Text>
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
    marginTop: 10,
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
    marginBottom: 20,
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
});
