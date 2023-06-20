import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";
import SimpleButton from "../components/SimpleButton";

const ProcessoFinalizado = ({ route, navigation }) => {
  const { pet } = route.params;

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
        <Text style={HeaderTextStyle}>Oba!</Text>
      </View>
      <View style={ParagraphView}>
        <Text style={ParagraphText}>
          Ficamos felizes com o sucesso do seu processo! Esperamos que o
          bichinho esteja curtindo muito essa nova experiência!
        </Text>
        <Text style={ParagraphText}>
          Agora, que tal compartilhar a história do {pet} com todos os outros
          membros do Meau?
        </Text>
      </View>
      <View style={[styles.ButtonRow, styles.floatingMenuButtonStyle]}>
        <TouchableOpacity style={styles.StandardButton}>
          <Text style={styles.ButtonText}>COMPARTILHAR HISTÓRIA</Text>
        </TouchableOpacity>
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
    color: "#88c9bf",
    fontSize: 80,
    fontFamily: "Courgette_400Regular",
  },
  HeaderStyle: { marginTop: 40, alignItems: "center", marginBottom: 40 },
  ParagraphText: { color: "#575756", fontSize: 18, textAlign: "center" },
  ParagraphView: { marginTop: 42, marginBottom: 14, paddingHorizontal: 48 },
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    width: 320,
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: "#88c9bf",
  },
  AdotarButtonView: {
    marginTop: 6,
    alignItems: "center",
    paddingBottom: 20,
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
  ButtonRow: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  floatingMenuButtonStyle: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default ProcessoFinalizado;
