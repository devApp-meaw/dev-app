import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { auth, createUserDocument } from "../../firebase";

import UserInput from "../components/UserInput";
import Icon from "react-native-vector-icons/FontAwesome";

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
    ImageUploadText,
    RegistrarView,
    RegistrarButtonText,
    RegistrarButton,
    ImageUploadIcon,
    input,
  } = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [userName, setUserName] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);

        return createUserDocument(user, {
          fullName,
          age,
          state,
          city,
          address,
          telephone,
          userName,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={container}>
          <View style={AlertView}>
            <Text style={AlertText}>
              As informações preenchidas serão divulgadas apenas para a pessoa
              com a qual você realizar o processo de adoção e/ou apadrinhamento,
              após a formalização do processo.
            </Text>
          </View>
          <View>
            <View style={InputTitleView}>
              <Text style={InputTitleText}> INFORMAÇÕES PESSOAIS</Text>
            </View>
            <View style={inputArea}>
              <TextInput
                label={"nome"}
                value={fullName}
                placeholder={"Nome Completo"}
                onChangeText={(text) => setFullName(text)}
                style={input}
              />
              <TextInput
                label={"idade"}
                value={age}
                placeholder={"Idade"}
                onChangeText={(text) => setAge(text)}
                style={input}
              />
              <TextInput
                label={"email"}
                value={email}
                placeholder={"E-mai"}
                onChangeText={(text) => setEmail(text)}
                style={input}
              />
              <TextInput
                label={"state"}
                value={state}
                placeholder={"Estado (UF)"}
                onChangeText={(text) => setState(text)}
                style={input}
              />
              <TextInput
                label={"city"}
                value={city}
                placeholder={"Cidade"}
                onChangeText={(text) => setCity(text)}
                style={input}
              />
              <TextInput
                label={"address"}
                value={address}
                placeholder={"Endereço"}
                onChangeText={(text) => setAddress(text)}
                style={input}
              />
              <TextInput
                label={"telephone"}
                value={telephone}
                placeholder={"Telefone"}
                onChangeText={(text) => setTelephone(text)}
                style={input}
              />
            </View>
          </View>
          <View>
            <View style={InputTitleView}>
              <Text style={InputTitleText}> INFORMAÇÕES DE PERFIL</Text>
            </View>
            <View style={inputArea}>
              <TextInput
                label={"userName"}
                value={userName}
                placeholder={"Nome de Usuário"}
                onChangeText={(text) => setUserName(text)}
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
              <UserInput
                label={"senha_confirma"}
                placeholder={"Confirme a Senha"}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={InputTitleView}>
            <Text style={InputTitleText}> FOTO DE PERFIL</Text>
            <View style={ImageUploadBox}>
              <Icon name="plus-circle" style={ImageUploadIcon} />
              <Text style={ImageUploadText}>adicionar foto</Text>
            </View>
          </View>

          <View style={RegistrarView}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[StandardButton, RegistrarButton]}
            >
              <Text style={RegistrarButtonText}>{"Registrar"}</Text>
            </TouchableOpacity>
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
    padding: 10,
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
    padding: 10,
  },
  InputTitleView: {
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  HiddenView: {
    display: "none",
  },
  ImageUploadBox: {
    marginTop: 18,
    color: "#757575",
    backgroundColor: "#e6e7e7",
    alignSelf: "center",
    height: 128,
    width: 128,
    borderRadius: 2,
    alignItems: "center",
    textAlignVertical: "center",
    paddingTop: 42,
  },
  ImageUploadIcon: {
    color: "#757575",
    fontSize: 22,
  },
  ImageUploadText: {
    fontSize: 14,
    color: "#757575",
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

export default RegisterUser;
