import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Connect with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Connect with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => {
      navigation.navigate("login");
    }}>
        <Text style={styles.signupButtonText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
      <ImageBackground style={styles.backgroundImage} source={require("./background.jpg")} resizeMode="cover"><ImageBackground style={styles.DdlUlTJb} source={require("./24hrauto3sm.jpg")} resizeMode="cover"></ImageBackground></ImageBackground>
    <Pressable onPress={() => {
      navigation.navigate("forgotPassword");
    }}><Text style={styles.NHJSACXL}>{"Forgot password?"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF"
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFE94B"
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold"
  },
  or: {
    fontSize: 16,
    marginBottom: 20,
    color: "#FFFFFF"
  },
  socialButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  socialButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  signupButton: {
    marginTop: 20
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 16
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 157,
    top: 6
  },
  DdlUlTJb: {
    width: 127,
    height: 70,
    position: "absolute",
    left: -41,
    top: 24
  },
  NHJSACXL: {
    width: 151,
    height: 50,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 104,
    color: "#ffffff",
    top: 550
  }
});
export default LoginScreen;