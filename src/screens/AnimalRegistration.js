import React, { useState } from "react";
import { View, Text } from "react-native";

import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SimpleButton from "../components/SimpleButton";
import { Checkbox } from "react-native-paper";
import UserInput from "../components/UserInput";
import { Divider, Button } from "react-native-paper";

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
  } = styles;
  const [species, setSpecies] = useState(false);
  const [gender, setGender] = useState(false);
  const [size, setSize] = useState(false);
  const [age, setAge] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={TextField}>
            <View style={Row}>
              <Text>Tenho interesse em cadastrar o animal para:</Text>
            </View>
          </View>
          <View style={[ButtonSection]}>
            <Button
              mode='contained'
              onPress={() => console.log("Pressed")}
              buttonColor='#ffd358'
            >
              ADOÇÃO
            </Button>
            <Button
              mode='contained'
              onPress={() => console.log("Pressed")}
              buttonColor='#ffd358'
            >
              APADRINHAR
            </Button>
            <Button
              mode='contained'
              onPress={() => console.log("Pressed")}
              buttonColor='#ffd358'
            >
              AJUDA
            </Button>
          </View>
          <Divider />
          <Text style={BigTitle}>Adoção</Text>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Nome do animal</Text>
            </View>
            <View style={Row}>
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
            <View style={Images}>
              <Text>Adicionar fotos</Text>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Especie</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Cachoroo</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Cachoroo</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Sexo</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Macho</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Femea</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Porte</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Pequeno</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Medio</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Grande</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Idade</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Filhote</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Adulto</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Idoso</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Temperamento</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Brincalhão</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Tímido</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Calmo</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Guarda</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Amoroso</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Preguiçoso</Text>
              </View>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Saude</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Vacinado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Vermifugado</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Castrado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Doente</Text>
              </View>
            </View>
            <View style={Row}>
              <UserInput
                label={"Saude"}
                placeholder={"Doenças do animal"}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Exigencias de adoção</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Termo de apadrinhamento</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Auxílio Financeiro</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Visistas ao animal</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox
                  status={species ? "checked" : "unchecked"}
                  onPress={() => {
                    setSpecies(!species);
                  }}
                />
                <Text style={CheckboxText}>Acompanhamento apoas a adoção</Text>
              </View>
            </View>
            <View style={OffsetRow}>
              <View style={CheckboxContainer}>
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
              <View style={CheckboxContainer}>
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
              <View style={CheckboxContainer}>
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
              <Text style={Title}>Sobre o animal</Text>
            </View>
            <View style={Row}>
              <UserInput
                label={"Saude"}
                placeholder={"Compartilhe a historia do animal"}
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextField: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 25,
  },
  Row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    display: "flex",
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
  CheckboxText: {
    marginTop: 6,
  },
  Title: {
    color: "#f7a800",
  },
  BigTitle: {
    fontFamily: "Roboto",
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
});

export default AnimalRegistration;
