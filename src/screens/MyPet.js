import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { StyleSheet, SafeAreaView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const MyPet = ({ route, navigation }) => {
  const { pet } = route.params;

  const {
    petImageStyle,
    EditIconView,
    EditIcon,
    BackgroundImageView,
    ButtonOnImage,
    PetNameText,
    DescriptionTitleText,
    DescriptionText,
    DescriptionView,
    DescriptionRowView,
    ButtonRow,
    container,
    StandardButton,
    ButtonText,
    FlatLine,
  } = styles;

  var petImage =
    pet.especie == "cachorro"
      ? require("../../assets/default_dog.jpg")
      : require("../../assets/default_cat.jpg");

  if (typeof pet.imageBase64 !== "undefined") {
    if (pet.imageBase64 !== "") {
      petImage = { uri: pet.imageBase64 };
    }
  }

  const {
    acompanhamento_pos,
    auxilio_financeiro,
    termo_apadrinhamento,
    visitas,
  } = pet.exigencias;

  let exigenciasList = [];
  let precisaList = [];

  if (acompanhamento_pos) {
    if (acompanhamento_pos == "1mes") {
      exigenciasList.push("acompanhamento pós-adoção de 1 mês");
    }

    if (acompanhamento_pos == "3meses") {
      exigenciasList.push("acompanhamento pós-adoção de 3 meses");
    }

    if (acompanhamento_pos == "6meses") {
      exigenciasList.push("acompanhamento pós-adoção de 6 meses");
    }
  }

  if (termo_apadrinhamento) {
    exigenciasList.push("termo de apadrinhamento");
  }

  if (visitas) {
    exigenciasList.push("visitas");
  }

  if (auxilio_financeiro) {
    if (auxilio_financeiro.alimentacao) {
      precisaList.push("auxílio financeiro");
    }

    if (auxilio_financeiro.objetos) {
      precisaList.push("objetos");
    }

    if (auxilio_financeiro.saude) {
      precisaList.push("gastos com saúde");
    }
  }

  const temperamento = pet.temperamento;
  let temperamentoList = [];

  if (temperamento) {
    if (temperamento.amoroso) {
      if (pet.sexo == "macho") {
        temperamentoList.push("amoroso");
      } else {
        temperamentoList.push("amorosa");
      }
    }

    if (temperamento.brincalhao) {
      if (pet.sexo == "macho") {
        temperamentoList.push("brincalhão");
      } else {
        temperamentoList.push("brincalhona");
      }
    }

    if (temperamento.calmo) {
      if (pet.sexo == "macho") {
        temperamentoList.push("calmo");
      } else {
        temperamentoList.push("calma");
      }
    }

    if (temperamento.guarda) {
      temperamentoList.push("guarda");
    }

    if (temperamento.preguicoso) {
      if (pet.sexo == "macho") {
        temperamentoList.push("preguiçoso");
      } else {
        temperamentoList.push("preguiçosa");
      }
    }

    if (temperamento.timido) {
      if (pet.sexo == "macho") {
        temperamentoList.push("tímido");
      } else {
        temperamentoList.push("tímida");
      }
    }
  }

  let exigenciasText = exigenciasList.join(", ");
  let precisaText = precisaList.join(", ");
  let temperamentoText = temperamentoList.join(", ");

  exigenciasText =
    exigenciasText.charAt(0).toUpperCase() + exigenciasText.slice(1) + ".";
  precisaText =
    precisaText.charAt(0).toUpperCase() + precisaText.slice(1) + ".";
  temperamentoText =
    temperamentoText.charAt(0).toUpperCase() + temperamentoText.slice(1) + ".";

  const petInfo = {
    nome: pet.nome,
    sexo: pet.sexo == "macho" ? "Macho" : "Fêmea",
    porte: pet.porte.charAt(0).toUpperCase() + pet.porte.slice(1),
    idade: pet.idade.charAt(0).toUpperCase() + pet.idade.slice(1),
    castrado: pet.saude.castrado ? "Sim" : "Não",
    vermifugado: pet.saude.vermifugado ? "Sim" : "Não",
    vacinado: pet.saude.vacinado ? "Sim" : "Não",
    doencas: pet.doencas,
    temperamento: temperamentoText,
    precisa: precisaText,
    exigencias: exigenciasText,
    localizacao: pet.endereco,
    sobre: pet.sobre,
  };

  return (
    <SafeAreaView>
      <ImageBackground style={petImageStyle} source={petImage}>
        <View style={BackgroundImageView}>
          <View style={ButtonOnImage}>
            <TouchableOpacity>
              <View style={EditIconView}>
                <MaterialIcons
                  style={EditIcon}
                  name="edit"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={container}>
        <View>
          <Text style={PetNameText}>{petInfo.nome}</Text>
        </View>
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>SEXO</Text>
            <Text style={DescriptionText}>{petInfo.sexo}</Text>
          </View>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>PORTE</Text>
            <Text style={DescriptionText}>{petInfo.porte}</Text>
          </View>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>IDADE</Text>
            <Text style={DescriptionText}>{petInfo.idade}</Text>
          </View>
        </View>
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>LOCALIZAÇÃO</Text>
            <Text style={DescriptionText}>{petInfo.localizacao}</Text>
          </View>
        </View>
        <View style={FlatLine} />
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>CASTRADO</Text>
            <Text style={DescriptionText}>{petInfo.castrado}</Text>
          </View>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>VERMIFUGADO</Text>
            <Text style={DescriptionText}>{petInfo.vermifugado}</Text>
          </View>
        </View>
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>VACINADO</Text>
            <Text style={DescriptionText}>{petInfo.vacinado}</Text>
          </View>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>DOENÇAS</Text>
            <Text style={DescriptionText}>{petInfo.doencas}</Text>
          </View>
        </View>
        <View style={FlatLine} />
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>TEMPERAMENTO</Text>
            <Text style={DescriptionText}>{petInfo.temperamento}</Text>
          </View>
        </View>
        <View style={FlatLine} />
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>{pet.nome} PRECISA DE</Text>
            <Text style={DescriptionText}>{petInfo.precisa}</Text>
          </View>
        </View>
        <View style={FlatLine} />
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>EXIGÊNCIAS DO DOADOR</Text>
            <Text style={DescriptionText}>{petInfo.exigencias}</Text>
          </View>
        </View>
        <View style={FlatLine} />
        <View style={DescriptionRowView}>
          <View style={DescriptionView}>
            <Text style={DescriptionTitleText}>MAIS SOBRE {pet.nome}</Text>
            <Text style={DescriptionText}>{petInfo.sobre}</Text>
          </View>
        </View>
        <View style={ButtonRow}>
          <TouchableOpacity style={StandardButton}>
            <Text style={ButtonText}>VER INTERESSADOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={StandardButton}>
            <Text style={ButtonText}>REMOVER PET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  petImageStyle: {
    width: "100%",
    height: 200,
  },
  EditIconView: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    height: 60,
    width: 60,
    shadowColor: "#434343",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  EditIcon: {
    color: "#434343",
  },
  BackgroundImageView: {
    height: 225,
  },
  ButtonOnImage: {
    alignSelf: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 24,
  },
  PetNameText: {
    fontSize: 16,
    color: "#434343",
    marginBottom: 8,
  },
  DescriptionTitleText: {
    textTransform: "uppercase",
    color: "#589b9b",
  },
  DescriptionText: {
    color: "#757575",
    fontSize: 14,
  },
  DescriptionView: {
    gap: 4,
  },
  DescriptionRowView: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 8,
  },
  ButtonRow: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    margin: 16,
  },
  StandardButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    width: "45%",
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: "#88c9bf",
  },
  ButtonText: {
    color: "#757575",
  },
  FlatLine: {
    backgroundColor: "#e0e0e0",
    height: 0.8,
  },
});

export default MyPet;
