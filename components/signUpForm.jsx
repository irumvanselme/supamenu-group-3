import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import react from "react";
import { AuthContext } from "../hooks/authContext";
import * as SecureStore from "expo-secure-store";

import * as Yup from "yup";

export function SignUpForm({ navigation }) {
  // useEffect(() => {
  //   async function getToken() {
  //     const token = await AsyncStorage.getItem("token");
  //     if (token) {
  //       navigation.navigate("Home");
  //     }
  //   }
  //   getToken();
  // }, []);

  const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, handleChange, handleReset, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobile: "",
      fullName: "",
    },

    // validationSchema: Yup.object().shape({
    //   email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Email is required"),
    //   password: Yup.string().min(8).required("Password is required"),
    //   fullName: Yup.string().required("Full Name is required"),
    //   mobile: Yup.number()
    //     .max(10, "Invalid Mobile Number")
    //     .required("Phone number is required"),
    // }),
    onSubmit: async (values, { resetForm }) => {
      if (
        !values.email ||
        !values.password ||
        !values.mobile ||
        !values.fullName
      ) {
        Alert.alert("Error", "You must fill in all fields");
        return;
      }

      setIsSubmitting(true);
      const response = await fetch(
        "http://196.223.240.154:8099/supapp/api/auth/client/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            mobile: values.mobile,
            firstName: values.fullName.split(" ")[0],
            lastName: values.fullName.split(" ")[1],
          }),
        }
      );
      const data = await response.json();

      setIsSubmitting(false);

      if (!response.ok) {
        // console.log("Failed");
        console.log(data);
        Alert.alert("Error", data.apierror.message);
        return;
      }
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <Feather name="user" size={24} color="gray" />
        <TextInput
          placeholder="Full Name"
          autoCapitalize="none"
          value={values.fullName}
          onChangeText={handleChange("fullName")}
        />
      </View>
      <View style={styles.inputStyle}>
        <Feather name="phone" size={24} color="gray" />
        <TextInput
          placeholder="Phone Number"
          autoCapitalize="none"
          value={values.mobile}
          keyboardType="numeric"
          onChangeText={handleChange("mobile")}
        />
      </View>
      <View style={styles.inputStyle}>
        <EvilIcons name="envelope" size={24} color="gray" />
        <TextInput
          placeholder="Your Email"
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange("email")}
        />
      </View>

      <View style={styles.inputStyle}>
        <AntDesign name="lock" size={24} color="gray" />
        <TextInput
          placeholder="Your Password"
          autoCapitalize="none"
          value={values.password}
          secureTextEntry={true}
          onChangeText={handleChange("password")}
        />
      </View>

      <View style={styles.submitButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(values);
            handleSubmit();
          }}
        >
          <Text style={styles.cap}>
            {isSubmitting ? "Signing up.." : "Proceed"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionalView}>
        <View style={styles.leftOption}></View>
        <Text style={styles.optionalText}>OR</Text>
        <View style={styles.RightOption}></View>
      </View>

      <View style={styles.pmgSignIn}>
        <Text style={styles.pmgSignInText}>If you have a PMG account</Text>
        <View style={styles.submitButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.cap}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>Already have an account?</Text>
          <Text style={styles.bottomTextTwo}>Login</Text>
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
