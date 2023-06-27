import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("Maps");
    }}>
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
      navigation.navigate("signup");
    }}>
        <Text style={styles.signupButtonText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
      
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
    fontWeight: "bold",
    width: 275,
    height: 36,
    textAlign: "center"
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