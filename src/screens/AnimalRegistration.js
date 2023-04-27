import React, { useState } from "react";
import { View, Text } from "react-native";

import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SimpleButton from "../components/SimpleButton";
import CheckBox from "@react-native-community/checkbox";
import UserInput from "../components/UserInput";
import { Divider, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";

const AnimalRegistration = () => {
  const {
    Row,
    TextField,
    CheckboxContainer,
    CheckboxText,
    Title,
    BigTitle,
    OffsetRow,
    Disabled,
    ButtonSection,
    Images,
    ImageUploadBox,
    ImageUploadIcon,
    ImageUploadText,
  } = styles;
  const [species, setSpecies] = useState(false);
  const [acompanhamentoBox, setAcompanhamentoBox] = useState(false);
  const [gender, setGender] = useState(false);
  const [size, setSize] = useState(false);
  const [age, setAge] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.HeaderTextView}>
            <Text style={BigTitle}>Adoção</Text>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Nome do animal</Text>
            </View>
            <View style={styles.TextRow}>
              <UserInput
                label={"Saude"}
                placeholder={"Nome do animal"}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Fotos do animal</Text>
            </View>
            <View style={ImageUploadBox}>
              <Icon name="plus-circle" style={ImageUploadIcon} />
              <Text style={ImageUploadText}>adicionar foto</Text>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>ESPÉCIE</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Cachorro</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Gato</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>SEXO</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Macho</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Fêmea</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>PORTE</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Pequeno</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Médio</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Grande</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>IDADE</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Filhote</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Adulto</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Idoso</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>TEMPARAMENTO</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Brincalhão</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Tímido</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Calmo</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Guarda</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Amoroso</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Preguiçoso</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>SAÚDE</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Vacinado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Vermifugado</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Castrado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Doente</Text>
              </View>
            </View>
            <View style={styles.TextRow}>
              <UserInput
                label={"Saude"}
                placeholder={"Doenças do animal"}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>EXIGÊNCIAS DE ADOÇÃO</Text>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Termo de apadrinhamento</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Auxílio Financeiro</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={species}
                  onValueChange={setSpecies}
                />
                <Text style={CheckboxText}>Visistas ao animal</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={acompanhamentoBox}
                  onValueChange={setAcompanhamentoBox}
                />
                <Text style={CheckboxText}>Acompanhamento pós adoção</Text>
              </View>
            </View>
            <View style={OffsetRow}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  disabled={true}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={[CheckboxText, Disabled]}>1 mes</Text>
              </View>
            </View>
            <View style={OffsetRow}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  disabled={true}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={[CheckboxText, Disabled]}>3 meses</Text>
              </View>
            </View>
            <View style={OffsetRow}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  disabled={true}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={[CheckboxText, Disabled]}>6 meses</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>SOBRE O ANIMAL</Text>
            </View>
            <View style={Row}>
              <UserInput
                label={"Saude"}
                placeholder={"Compartilhe a historia do animal"}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.AdotarButtonView}>
              <SimpleButton
                text={"COLOCAR PARA ADOÇÃO"}
                stylesButton={styles.StandardButton}
                stylesText={styles.AdotarButtonText}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  TextField: {
    marginHorizontal: 25,
    marginBottom: 20,
  },
  TextRow: {
    width: "100%",
  },
  Row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    marginBottom: 2,
  },
  Col: {
    width: "30%",
    flexDirection: "row",
    padding: 20,
    margin: 10,
  },
  ButtonStyle: {
    backgroundColor: "#ffd358",
    padding: 5,
  },
  CheckboxContainer: {
    paddingTop: 6,
    width: "30%",
    flexDirection: "row",
  },
  LargeCheckboxContainer: {
    paddingTop: 6,
    width: "100%",
    flexDirection: "row",
  },
  CheckboxText: {
    fontSize: 14,
    marginTop: 6,
  },
  Title: {
    color: "#f7a800",
  },
  BigTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  OffsetRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
    marginLeft: 45,
  },
  Disabled: {
    color: "#bdbdbd",
  },
  ButtonSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  Images: {
    backgroundColor: "#f1f2f2",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    width: 312,
    height: 128,
    elevation: 20,
    shadowColor: "#171717",
    marginTop: 12,
    marginRight: 45,
    marginBottom: 25,
  },
  ImageUploadBox: {
    marginTop: 18,
    color: "#757575",
    backgroundColor: "#e6e7e7",
    height: 128,
    borderRadius: 2,
    alignItems: "center",
    textAlignVertical: "center",
    paddingTop: 42,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  ImageUploadIcon: {
    color: "#757575",
    fontSize: 22,
  },
  ImageUploadText: {
    fontSize: 14,
    color: "#757575",
  },
  inputArea: {
    marginTop: 64,
    flexDirection: "column",
    gap: 20,
  },
  checkbox: {
    marginRight: 6,
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
  HeaderTextView: { marginTop: 8, marginBottom: 24 },
});

export default AnimalRegistration;
