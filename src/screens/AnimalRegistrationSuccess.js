import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";

const AnimalRegistrationSuccess = ({ navigation }) => {
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
        <Text style={HeaderTextStyle}>Eba!</Text>
      </View>
      <View style={ParagraphView}>
        <Text style={ParagraphText}>
          O cadastro do seu pet foi realizado com sucesso!{"\n"}
          {"\n"}
          Certifique-se que permitiu o envio de notificações por push no campo
          de privacidade do menu configurações do aplicativo. Assim, poderemos
          te avisar assim que alguém interessado entrar em contato!
        </Text>
      </View>
      <View style={AdotarButtonView}>
        <View style={styles.AdotarButtonView}>
          <TouchableOpacity style={styles.StandardButton}>
            <Text style={styles.AdotarButtonText}>MEUS PETS</Text>
          </TouchableOpacity>
        </View>
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

export default AnimalRegistrationSuccess;
