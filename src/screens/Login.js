import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { auth } from "../../firebase";

import { StyleSheet } from "react-native";
import SocialLoginButton from "../components/SocialLoginButton";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

const Login = ({ navigation }) => {
  const {
    container,
    inputArea,
    EntrarButtonText,
    EntrarView,
    LogarRedesView,
    StandardButton,
    EntrarButton,
    GoogleEntrarButton,
    FacebookEntrarButton,
    input,
  } = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        dispatch(changeUser());
      })
      .then(() => navigation.navigate("AnimalRegistration"))
      .catch((error) => alert(error.message));
  };

  return (
    <View style={container}>
      <View style={inputArea}>
        <TextInput
          label={"email"}
          value={email}
          placeholder={"E-mai"}
          onChangeText={(text) => setEmail(text)}
          style={input}
        />
        <TextInput
          secureTextEntry={true}
          label={"password"}
          value={password}
          placeholder={"Senha"}
          onChangeText={(text) => setPassword(text)}
          style={input}
        />
      </View>
      <View style={EntrarView}>
        <TouchableOpacity
          onPress={handleLogin}
          style={[StandardButton, EntrarButton]}
        >
          <Text style={EntrarButtonText}>{"Entrar"}</Text>
        </TouchableOpacity>
      </View>
      <View style={LogarRedesView}>
        <SocialLoginButton
          name={"facebook"}
          text={"ENTRAR COM FACEBOOK"}
          stylesButton={[StandardButton, FacebookEntrarButton]}
        />
        <SocialLoginButton
          name={"google"}
          text={"ENTRAR COM GOOGLE"}
          stylesButton={[StandardButton, GoogleEntrarButton]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  inputArea: {
    marginTop: 64,
    flexDirection: "column",
    gap: 20,
  },
  EntrarButtonText: {
    fontSize: 12,
    color: "#434343",
  },
  EntrarView: {
    marginTop: 52,
    alignItems: "center",
  },
  LogarRedesView: {
    marginTop: 72,
    alignItems: "center",
    gap: 10,
  },
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  EntrarButton: {
    backgroundColor: "#88c9bf",
  },
  GoogleEntrarButton: {
    backgroundColor: "#f15f5c",
  },
  FacebookEntrarButton: {
    backgroundColor: "#4267B2",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: "#e6e7e8",
  },
});

export default Login;
