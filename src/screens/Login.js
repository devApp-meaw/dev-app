import * as React from "react";
import { View } from "react-native";

import { StyleSheet } from "react-native";
import UserInput from "../components/UserInput";
import SocialLoginButton from "../components/SocialLoginButton";
import SimpleButton from "../components/SimpleButton";

const Login = () => {
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
  } = styles;
  return (
    <View style={container}>
      <View style={inputArea}>
        <UserInput
          label={"usuario"}
          placeholder={"Nome de usuário"}
          secureTextEntry={false}
        />
        <UserInput
          label={"senha"}
          placeholder={"Senha"}
          secureTextEntry={true}
        />
      </View>
      <View style={EntrarView}>
        <SimpleButton
          text={"ENTRAR"}
          stylesButton={[StandardButton, EntrarButton]}
          stylesText={EntrarButtonText}
        />
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
});

export default Login;
