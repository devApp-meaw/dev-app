import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from "react-native";

import SimpleButton from "../components/SimpleButton";
import UserInput from "../components/UserInput";

const RegisterUser = () => {
  const {
    container,
    inputArea,
    StandardButton,
    HiddenView,
    AlertView,
    AlertText,
    InputTitleView,
    InputTitleText,
    ImageUploadBox,
    RegistrarView,
    RegistrarButtonText,
    RegistrarButton,
  } = styles;
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={container}>
      <View style={AlertView}>
        <Text style={AlertText}>
        As informações preenchidas serão divulgadas
        apenas para a pessoa com a qual você realizar
        o processo de adoção e/ou apadrinhamento,
        após a formalização do processo.
        </Text>
      </View>
      <View>
        <View style={InputTitleView}>
            <Text style={InputTitleText}> INFORMAÇÕES PESSOAIS
            </Text>
        </View>
        <View style={inputArea}>
            <UserInput
            label={"nome"}
            placeholder={"Nome Completo"}
            secureTextEntry={false}
            />
            <UserInput
            label={"idade"}
            placeholder={"Idade"}
            secureTextEntry={false}
            />
            <UserInput
            label={"email"}
            placeholder={"E-mail"}
            secureTextEntry={false}
            />
            <UserInput
            label={"estado"}
            placeholder={"Estado (UF)"}
            secureTextEntry={false}
            />
            <UserInput
            label={"cidade"}
            placeholder={"Cidade"}
            secureTextEntry={false}
            />
            <UserInput
            label={"endereco"}
            placeholder={"Endereço"}
            secureTextEntry={false}
            />
            <UserInput
            label={"telefone"}
            placeholder={"Telefone"}
            secureTextEntry={false}
            />
        </View>
      </View>
      <View>
        <View style={InputTitleView}>
            <Text style={InputTitleText}> INFORMAÇÕES DE PERFIL
            </Text>
        </View>
        <View style={inputArea}>
            <UserInput
            label={"usuario"}
            placeholder={"Nome de Usuario"}
            secureTextEntry={false}
            />
            <UserInput
            label={"senha"}
            placeholder={"Senha"}
            secureTextEntry={true}
            />
            <UserInput
            label={"senha_confirma"}
            placeholder={"Confirme a Senha"}
            secureTextEntry={true}
            />
        </View>
      </View>
      
      <View style={InputTitleView}>
        <Text style={InputTitleText}> FOTO DE PERFIL
        </Text>
        <View style={ImageUploadBox}>

        </View>
      </View>
      
      <View style={RegistrarView}>
        <SimpleButton
          text={"Registrar"}
          stylesButton={[StandardButton, RegistrarButton]}
          stylesText={RegistrarButtonText}
        />
      </View>
    </View>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  inputArea: {
    flexDirection: "column",
    gap: 20,
  },
  RegistrarButtonText: {
    fontSize: 12,
    color: "#434343",
  },
  RegistrarButton: {
    backgroundColor: "#88c9bf",
  },
  RegistrarView: {
    marginTop: 52,
    marginBottom: 52,
    alignItems: "center",
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
  AlertText: { 
    color: "#434343", 
    fontSize: 14, 
    textAlign: "center",
    backgroundColor: "#cfe9e5",
    borderRadius: 4,
    padding: 10
  },
  AlertView: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  InputTitleText: { 
    color: "#599C9C", 
    fontSize: 14, 
    textAlign: "left",
    padding: 10
  },
  InputTitleView: {
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  HiddenView: {
    display: "none"
  },
  ImageUploadBox: {
    marginTop: 18,
    color: "#757575",
    backgroundColor: "#e6e7e7",
    alignSelf: "center",
    height: 128,
    width: 128,
    borderRadius: 2,
  },
});

export default RegisterUser;
