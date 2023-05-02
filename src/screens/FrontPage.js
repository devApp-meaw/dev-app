import * as React from "react";
import { View, Text, Image } from "react-native";

import { StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";

const FrontPage = () => {
  const {
    container,
    HeaderStyle,
    HeaderTextStyle,
    ParagraphView,
    ParagraphText,
    AdotarButtonView,
    StandardButton,
    AdotarButtonText,
    LoginView,
    LoginText,
    LogoImage,
    LogoView,
  } = styles;
  return (
    <View style={container}>
      <View style={HeaderStyle}>
        <Text style={HeaderTextStyle}>Olá!</Text>
      </View>
      <View style={ParagraphView}>
        <Text style={ParagraphText}>
          Bem-vindo ao Meau!{"\n"}Aqui você pode adotar, doar e ajudar cães e
          gatos com facilidade.{"\n"}Qual o seu interesse?
        </Text>
      </View>
      <View style={AdotarButtonView}>
        <SimpleButton
          text={"ADOTAR"}
          stylesButton={StandardButton}
          stylesText={AdotarButtonText}
        />
        <SimpleButton
          text={"CADASTRAR ANIMAL"}
          stylesButton={StandardButton}
          stylesText={AdotarButtonText}
        />
      </View>
      <View style={LoginView}>
        <Text style={LoginText}>login</Text>
      </View>
      <View style={LogoView}>
        <Image
          style={LogoImage}
          source={require("../../assets/Meau_marca_2.png")}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  HeaderTextStyle: {
    color: "#ffd358",
    fontSize: 80,
    fontFamily: "Courgette_400Regular",
  },
  HeaderStyle: { paddingTop: 20, alignItems: "center" },
  ParagraphText: { color: "#575756", fontSize: 18, textAlign: "center" },
  ParagraphView: { paddingTop: 42, paddingBottom: 20, paddingHorizontal: 48 },
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
    shadowRadius: 2,
    backgroundColor: "#ffd358",
  },
  AdotarButtonView: {
    marginTop: 22,
    gap: 16,
    alignItems: "center",
    paddingBottom: 34,
  },
  AdotarButtonText: {
    fontSize: 12,
    color: "#434343",
  },
  LoginText: {
    fontSize: 18,
    color: "#88c9bf",
  },
  LoginView: {
    alignItems: "center",
    paddingBottom: 55,
  },
  LogoImage: {
    width: 122,
    height: 44,
  },
  LogoView: { alignItems: "center" },
});

export default FrontPage;
