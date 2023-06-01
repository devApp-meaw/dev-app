import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AddAnimal } from "../../firebase";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import SimpleButton from "../components/SimpleButton";
import CheckBox from "@react-native-community/checkbox";
import UserInput from "../components/UserInput";
import { Divider, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Checkbox, RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";

const AnimalRegistration = ({ navigation }) => {
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
    InputText,
  } = styles;

  const [especieButton, setEspecieButton] = useState(null);
  const [sexoButton, setSexoButton] = useState(null);
  const [porteButton, setPorteButton] = useState(null);
  const [idadeButton, setIdadeButton] = useState(null);

  const [brincalhaoBox, setBrincalhaoBox] = useState(false);
  const [timidoBox, setTimidoBox] = useState(false);
  const [calmoBox, setCalmoBox] = useState(false);
  const [guardaBox, setGuardaBox] = useState(false);
  const [amorosoBox, setAmorosoBox] = useState(false);
  const [preguicosoBox, setPreguicosoBox] = useState(false);

  const [vacinadoBox, setVacinadoBox] = useState(false);
  const [vermifugadoBox, setVermifugadoBox] = useState(false);
  const [castradoBox, setCastradoBox] = useState(false);
  const [doenteBox, setDoenteBox] = useState(false);

  const [termoBox, setTermoBox] = useState(false);
  const [auxilioBox, setAuxilioBox] = useState(false);
  const [visitasBox, setVisitasBox] = useState(false);
  const [acompanhamentoBox, setAcompanhamentoBox] = useState(false);

  const [alimentacaoBox, setAlimentacaoBox] = useState(false);
  const [saudeBox, setSaudeBox] = useState(false);
  const [objetosBox, setObjetosBox] = useState(false);

  const [acompanhamentoButton, setAcompanhamentoButton] = useState(null);

  const [nomeText, setNomeText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [doencasText, setDoencasText] = useState("");
  const [sobreText, setSobreText] = useState("");
  const user = useSelector((state) => state.user);

  const handleAddAnimal = () => {
    form_animal = {
      nome: nomeText,
      email: emailText,
      especie: especieButton,
      sexo: sexoButton,
      porte: porteButton,
      idade: idadeButton,
      brincalhao: brincalhaoBox,
      timido: timidoBox,
      calmo: calmoBox,
      guarda: guardaBox,
      amoroso: amorosoBox,
      preguicoso: preguicosoBox,
      vacinado: vacinadoBox,
      vermifugado: vermifugadoBox,
      castrado: castradoBox,
      doente: doenteBox,
      doencas: doencasText,
      termo_apadrinhamento: termoBox,
      alimentacao: alimentacaoBox,
      saude: saudeBox,
      objetos: objetosBox,
      visitas: visitasBox,
      acompanhamento_pos: acompanhamentoButton,
      sobre: sobreText,
    };

    if (user.isLogged) {
      return AddAnimal(form_animal)
        .then(() => navigation.navigate("AnimalRegistrationSuccess"))
        .catch((error) => alert(error.message));
    } else {
      alert("Usuário não logado");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.HeaderTextView}>
            <Text style={BigTitle}>Adoção</Text>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>E-mail do dono</Text>
            </View>
            <View style={styles.TextRow}>
              <TextInput
                label={"emailLabel"}
                value={emailText}
                placeholder={"E-mail do dono"}
                onChangeText={(text) => setEmailText(text)}
                style={InputText}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Nome do animal</Text>
            </View>
            <View style={styles.TextRow}>
              <TextInput
                label={"nomeLabel"}
                value={nomeText}
                placeholder={"Nome do animal"}
                onChangeText={(text) => setNomeText(text)}
                style={InputText}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>Fotos do animal</Text>
            </View>
            <View style={ImageUploadBox}>
              <Icon name='plus-circle' style={ImageUploadIcon} />
              <Text style={ImageUploadText}>adicionar foto</Text>
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>ESPÉCIE</Text>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='cachorro'
                  status={
                    especieButton === "cachorro" ? "checked" : "unchecked"
                  }
                  onPress={() => setEspecieButton("cachorro")}
                />
                <Text style={CheckboxText}>Cachorro</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='gato'
                  status={especieButton === "gato" ? "checked" : "unchecked"}
                  onPress={() => setEspecieButton("gato")}
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
                <RadioButton.Android
                  style={styles.checkbox}
                  value='macho'
                  status={sexoButton === "macho" ? "checked" : "unchecked"}
                  onPress={() => setSexoButton("macho")}
                />
                <Text style={CheckboxText}>Macho</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='femea'
                  status={sexoButton === "femea" ? "checked" : "unchecked"}
                  onPress={() => setSexoButton("femea")}
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
                <RadioButton.Android
                  style={styles.checkbox}
                  value='pequeno'
                  status={porteButton === "pequeno" ? "checked" : "unchecked"}
                  onPress={() => setPorteButton("pequeno")}
                />
                <Text style={CheckboxText}>Pequeno</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='medio'
                  status={porteButton === "medio" ? "checked" : "unchecked"}
                  onPress={() => setPorteButton("medio")}
                />
                <Text style={CheckboxText}>Médio</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='grande'
                  status={porteButton === "grande" ? "checked" : "unchecked"}
                  onPress={() => setPorteButton("grande")}
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
                <RadioButton.Android
                  style={styles.checkbox}
                  value='filhote'
                  status={idadeButton === "filhote" ? "checked" : "unchecked"}
                  onPress={() => setIdadeButton("filhote")}
                />
                <Text style={CheckboxText}>Filhote</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='adulto'
                  status={idadeButton === "adulto" ? "checked" : "unchecked"}
                  onPress={() => setIdadeButton("adulto")}
                />
                <Text style={CheckboxText}>Adulto</Text>
              </View>
              <View style={CheckboxContainer}>
                <RadioButton.Android
                  style={styles.checkbox}
                  value='idoso'
                  status={idadeButton === "idoso" ? "checked" : "unchecked"}
                  onPress={() => setIdadeButton("idoso")}
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
                <Checkbox.Android
                  style={styles.checkbox}
                  status={brincalhaoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setBrincalhaoBox(!brincalhaoBox);
                  }}
                />
                <Text style={CheckboxText}>Brincalhão</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={timidoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setTimidoBox(!timidoBox);
                  }}
                />
                <Text style={CheckboxText}>Tímido</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={calmoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setCalmoBox(!calmoBox);
                  }}
                />
                <Text style={CheckboxText}>Calmo</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={guardaBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setGuardaBox(!guardaBox);
                  }}
                />
                <Text style={CheckboxText}>Guarda</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={amorosoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setAmorosoBox(!amorosoBox);
                  }}
                />
                <Text style={CheckboxText}>Amoroso</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={preguicosoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setPreguicosoBox(!preguicosoBox);
                  }}
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
                <Checkbox.Android
                  style={styles.checkbox}
                  status={vacinadoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setVacinadoBox(!vacinadoBox);
                  }}
                />
                <Text style={CheckboxText}>Vacinado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={vermifugadoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setVermifugadoBox(!vermifugadoBox);
                  }}
                />
                <Text style={CheckboxText}>Vermifugado</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={castradoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setCastradoBox(!castradoBox);
                  }}
                />
                <Text style={CheckboxText}>Castrado</Text>
              </View>
              <View style={CheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={doenteBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setDoenteBox(!doenteBox);
                  }}
                />
                <Text style={CheckboxText}>Doente</Text>
              </View>
            </View>
            <View style={styles.TextRow}>
              <TextInput
                label={"doencasLabel"}
                value={doencasText}
                placeholder={"Doenças do animal"}
                onChangeText={(text) => setDoencasText(text)}
                style={InputText}
              />
            </View>
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>EXIGÊNCIAS DE ADOÇÃO</Text>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={termoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setTermoBox(!termoBox);
                  }}
                />
                <Text style={CheckboxText}>Termo de apadrinhamento</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={auxilioBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setAuxilioBox(!auxilioBox);
                  }}
                />
                <Text style={CheckboxText}>Auxílio Financeiro</Text>
              </View>
            </View>
            {auxilioBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <Checkbox.Android
                    style={styles.checkbox}
                    status={alimentacaoBox ? "checked" : "unchecked"}
                    onPress={() => {
                      setAlimentacaoBox(!alimentacaoBox);
                    }}
                  />
                  <Text style={[CheckboxText]}>Alimentação</Text>
                </View>
              </View>
            ) : null}
            {auxilioBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <Checkbox.Android
                    style={styles.checkbox}
                    status={saudeBox ? "checked" : "unchecked"}
                    onPress={() => {
                      setSaudeBox(!saudeBox);
                    }}
                  />
                  <Text style={[CheckboxText]}>Saúde</Text>
                </View>
              </View>
            ) : null}
            {auxilioBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <Checkbox.Android
                    style={styles.checkbox}
                    status={objetosBox ? "checked" : "unchecked"}
                    onPress={() => {
                      setObjetosBox(!objetosBox);
                    }}
                  />
                  <Text style={[CheckboxText]}>Objetos</Text>
                </View>
              </View>
            ) : null}
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={visitasBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setVisitasBox(!visitasBox);
                  }}
                />
                <Text style={CheckboxText}>Visistas ao animal</Text>
              </View>
            </View>
            <View style={Row}>
              <View style={styles.LargeCheckboxContainer}>
                <Checkbox.Android
                  style={styles.checkbox}
                  status={acompanhamentoBox ? "checked" : "unchecked"}
                  onPress={() => {
                    setAcompanhamentoBox(!acompanhamentoBox);
                  }}
                />
                <Text style={CheckboxText}>Acompanhamento pós adoção</Text>
              </View>
            </View>
            {acompanhamentoBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <RadioButton.Android
                    style={styles.checkbox}
                    value='1mes'
                    status={
                      acompanhamentoButton === "1mes" ? "checked" : "unchecked"
                    }
                    onPress={() => setAcompanhamentoButton("1mes")}
                  />
                  <Text style={[CheckboxText]}>1 mês</Text>
                </View>
              </View>
            ) : null}
            {acompanhamentoBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <RadioButton.Android
                    style={styles.checkbox}
                    value='3meses'
                    status={
                      acompanhamentoButton === "3meses"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setAcompanhamentoButton("3meses")}
                  />
                  <Text style={[CheckboxText]}>3 meses</Text>
                </View>
              </View>
            ) : null}
            {acompanhamentoBox ? (
              <View style={OffsetRow}>
                <View style={styles.LargeCheckboxContainer}>
                  <RadioButton.Android
                    style={styles.checkbox}
                    value='6meses'
                    status={
                      acompanhamentoButton === "6meses"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setAcompanhamentoButton("6meses")}
                  />
                  <Text style={[CheckboxText]}>6 meses</Text>
                </View>
              </View>
            ) : null}
          </View>
          <View style={TextField}>
            <View style={Row}>
              <Text style={Title}>SOBRE O ANIMAL</Text>
            </View>
            <View style={styles.TextRow}>
              <TextInput
                label={"sobreLabel"}
                value={sobreText}
                placeholder={"Compartilhe a história do animal"}
                onChangeText={(text) => setSobreText(text)}
                style={InputText}
              />
            </View>
            <View style={styles.AdotarButtonView}>
              <TouchableOpacity
                onPress={handleAddAnimal}
                style={styles.StandardButton}
              >
                <Text style={styles.AdotarButtonText}>COLOCAR PARA ADOÇÃO</Text>
              </TouchableOpacity>
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
  InputText: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: "#e6e7e8",
  },
});

export default AnimalRegistration;
